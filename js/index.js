import { Octokit, App } from "https://cdn.skypack.dev/octokit";

//TODO: change to secret.
const octokit = new Octokit({ auth: '' });
const response = await octokit.request("Get /repos/{owner}/{repo}/commits", { owner: 'Mongar23', repo: 'Mongar23.github.io' });

console.log("login: " + response.data[0].commit.author.name + ", date: " + response.data[0].commit.author.date);