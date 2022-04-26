import { Octokit, App } from "https://cdn.skypack.dev/octokit";

//TODO: change to secret.
const octokit = new Octokit({ auth: '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' });
const response = await octokit.request("Get /repos/{owner}/{repo}/commits", { owner: 'Mongar23', repo: 'Mongar23.github.io' });

const author = response.data[0].commit.author;
let date = new Date(author.date);
date = date.toLocaleDateString();

console.log("login: " + author.name + ", date: " + date);

document.getElementById("author").innerHTML = author.name;
document.getElementById("date").innerHTML = author.date;
