import { Octokit, App } from "https://cdn.skypack.dev/octokit";

const octokit = new Octokit({ auth: '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' });
const response = await octokit.request("Get /repos/{owner}/{repo}/commits", { owner: 'Mongar23', repo: 'Mongar23.github.io' });

const author = response.data[0].commit.author;
let date = new Date(author.date);

document.getElementById("footerText").innerHTML = "Last edited by " + author.name + " on " + date.toLocaleDateString();