import { Octokit } from "https://cdn.skypack.dev/@octokit/core";

//TODO: change to secret.
const octokit = new Octokit({ auth: '' });

const response = await octokit.request("Get /repos/{owner}/{repo}/commits", { owner: 'Mongar23', repo: 'Mongar23.github.io' })

console.log(response);