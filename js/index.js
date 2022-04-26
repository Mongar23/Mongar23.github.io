import { Octokit } from "https://cdn.skypack.dev/octokit";

const octokit = new Octokit();
const response = await octokit.request("GET /repos/{owner}/{repo}/commits", { owner: 'Mongar23', repo: 'Mongar23.github.io' });

const author = response.data[0].commit.author;
let date = new Date(author.date);

document.getElementById("footerText").innerHTML = "Last edited by " + author.name + " on " + date.toLocaleDateString();