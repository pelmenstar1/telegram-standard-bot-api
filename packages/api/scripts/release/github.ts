import { Octokit } from '@octokit/rest';

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

export async function createGithubRelease(version: string) {
  await octokit.repos.createRelease({
    repo: 'https://github.com/pelmenstar1/telegram-standard-bot-api',
    owner: 'pelmenstar1@gmail.com',
    tag_name: version,
    generate_release_notes: true,
    make_latest: 'true',
  });
}
