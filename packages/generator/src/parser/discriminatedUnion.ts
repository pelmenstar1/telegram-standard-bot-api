import {
  DiscriminatedUnionValueType,
  ParsedField,
  ValueType,
  ValueTypeKind,
} from '../types';

const QUOTED_VALUE_PATTERN = /“([^”]*)”/g;

// A list of quoted values, e.g. "“a”, “b” and “c”".
const QUOTED_LIST = String.raw`“[^”]*”(?:\s*(?:,|and|or)\s*“[^”]*”)*`;

// Wordings that tie a field to a few values of the discriminating one:
//   "For “text_link” only, URL that…"
//   "…; for “gift_purchase” transactions only"
//   "…; available only for “email” type"
//   "…; available if requested for “passport”, “driver_license”…"
// The value list has to sit right next to the wording, so that a description
// merely mentioning some values is left alone.
const ONLY_FOR_PATTERNS = [
  new RegExp(String.raw`\bonly\s+for\s+(${QUOTED_LIST})`, 'i'),
  new RegExp(String.raw`\bfor\s+(${QUOTED_LIST})(?:\s+\w+){0,2}\s+only\b`, 'i'),
  new RegExp(String.raw`\bif\s+requested\s+for\s+(${QUOTED_LIST})`, 'i'),
];

export function parseOnlyForValues(description: string): string[] | null {
  for (const pattern of ONLY_FOR_PATTERNS) {
    const match = description.match(pattern);

    if (match !== null) {
      return Array.from(
        match[1].matchAll(QUOTED_VALUE_PATTERN),
        ([, value]) => value
      );
    }
  }

  return null;
}

/**
 * The values a field can discriminate on: a union of at least two string
 * literals. A single literal tells the variants of a type apart from those of
 * its sibling types, not from each other.
 */
function getDiscriminatorValues(type: ValueType): string[] | null {
  if (type.kind !== ValueTypeKind.UNION || type.types.length < 2) {
    return null;
  }

  const values: string[] = [];

  for (const member of type.types) {
    if (
      member.kind !== ValueTypeKind.LITERAL ||
      typeof member.value !== 'string'
    ) {
      return null;
    }

    values.push(member.value);
  }

  return values;
}

type FieldConstraint = {
  field: ParsedField;
  values: string[];
};

function collectConstraints(
  fields: ParsedField[],
  discriminator: ParsedField,
  allowedValues: Set<string>
): FieldConstraint[] {
  const result: FieldConstraint[] = [];

  for (const field of fields) {
    if (field === discriminator || !field.optional) {
      continue;
    }

    const values = parseOnlyForValues(field.description);

    // Values outside the discriminator's own set mean the description talks
    // about something else, e.g. the values of another field.
    if (
      values === null ||
      values.length === 0 ||
      values.some((value) => !allowedValues.has(value))
    ) {
      continue;
    }

    result.push({ field, values });
  }

  return result;
}

function literalsToValueType(values: readonly string[]): ValueType {
  if (values.length === 1) {
    return {
      kind: ValueTypeKind.LITERAL,
      value: values[0],
    };
  }

  return {
    kind: ValueTypeKind.UNION,
    types: values.map((value) => ({
      kind: ValueTypeKind.LITERAL,
      value,
    })),
  };
}

/**
 * Groups the discriminator values by the set of fields they allow, as values
 * allowing the same fields cannot be told apart by the type system, then spells
 * every group out as a complete object shape.
 */
function buildVariants(
  fields: readonly ParsedField[],
  discriminator: ParsedField,
  values: string[],
  constraints: readonly FieldConstraint[]
): ParsedField[][] {
  const groups = new Map<string, string[]>();
  const valuesByField = new Map<ParsedField, string[]>();

  for (const { field, values } of constraints) {
    valuesByField.set(field, values);
  }

  for (const value of values) {
    const key = constraints
      .filter((constraint) => constraint.values.includes(value))
      .map(({ field }) => field.name)
      .join(',');

    const group = groups.get(key);

    if (group === undefined) {
      groups.set(key, [value]);
    } else {
      group.push(value);
    }
  }

  return [...groups.values()].map((groupValues) =>
    fields.flatMap((field) => {
      if (field === discriminator) {
        return [{ ...field, type: literalsToValueType(groupValues) }];
      }

      // Every value of a group allows the same fields, so any of them answers
      // whether the field belongs to the variant.
      const allowedValues = valuesByField.get(field);

      return allowedValues === undefined ||
        allowedValues.includes(groupValues[0])
        ? [field]
        : [];
    })
  );
}

/**
 * Turns a flat object into a discriminated union when its fields describe one,
 * or returns `null` when they do not. A type qualifies when a required field
 * holds a closed set of string literals and at least one optional field is
 * described as belonging to only some of them.
 */
export function toDiscriminatedUnion(
  fields: ParsedField[]
): DiscriminatedUnionValueType | null {
  let best: {
    discriminator: ParsedField;
    values: string[];
    constraints: FieldConstraint[];
  } | null = null;

  for (const field of fields) {
    if (field.optional) {
      continue;
    }

    const values = getDiscriminatorValues(field.type);
    if (values === null) {
      continue;
    }

    const constraints = collectConstraints(fields, field, new Set(values));

    // A type can hold several literal unions, e.g. TransactionPartnerUser has
    // both `type` and `transaction_type`. The one the descriptions refer to the
    // most is the one the variants are about.
    if (best === null || constraints.length > best.constraints.length) {
      best = { discriminator: field, values, constraints };
    }
  }

  if (best === null || best.constraints.length === 0) {
    return null;
  }

  const { discriminator, values, constraints } = best;
  const variants = buildVariants(fields, discriminator, values, constraints);

  // Every value allows the same fields, so splitting the type apart would not
  // narrow anything.
  if (variants.length < 2) {
    return null;
  }

  return {
    kind: ValueTypeKind.DISCRIMINATED_UNION,
    variants,
  };
}
