import { Octokit } from '@octokit/rest';

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

export async function createGithubRelease(version: string) {
  await octokit.repos.createRelease({
    repo: 'telegram-standard-bot-api',
    owner: 'pelmenstar1',
    tag_name: version,
    generate_release_notes: true,
    make_latest: 'true',
  });
}
