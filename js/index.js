import { Octokit } from "https://cdn.skypack.dev/octokit";
import "./FitText.js"

const octokit = new Octokit();
const response = await octokit.request("GET /repos/{owner}/{repo}/commits", { owner: 'Mongar23', repo: 'Mongar23.github.io' });

const author = response.data[0].commit.author;
let date = new Date(author.date);

document.getElementById("footerText").innerHTML = "Last edited by " + author.name + " on " + date.toLocaleDateString();

var toBeScaled = document.getElementsByClassName('fitText');
for (let i = 0; i < toBeScaled.length; i++) {
    const element = toBeScaled[i];
    const scale = parseFloat(element.id);

    fitText(element, scale);
    console.log("Scaled " + element + " to size " + scale)
}