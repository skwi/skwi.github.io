const GitHubApi = require('github');
const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const frontMatter = require("front-matter");

const github = new GitHubApi({
    protocol: "https",
    host: "api.github.com",
    pathPrefix: "",
    timeout: 5000
})
const commentDataPath = path.join(__dirname, '../_data/commentrefs.yml');
const postDirectory = path.join(__dirname, '../_posts/');
const siteRoot = "http://skwi.fr";

function getFrontMatterForPost(postFilename) {
    return frontMatter(fs.readFileSync(path.join(postDirectory, postFilename), 'utf8')).attributes;
}
function getIssueIdForPost(postFilename) {
    let commentData = yaml.safeLoad(fs.readFileSync(commentDataPath, 'utf8'));
    return commentData[postFilename] !== undefined ? commentData[postFilename] : null;
}
function setIssueIdForPost(postFilename, issueId) {
    let commentData = yaml.safeLoad(fs.readFileSync(commentDataPath, 'utf8'));
    commentData[postFilename] = issueId;
    fs.writeFileSync(commentDataPath, yaml.safeDump(commentData), 'utf8');
}


fs.readdirSync(postDirectory, 'utf8').forEach(postFile => {
    let postInfo = getFrontMatterForPost(postFile);
    console.log(`\nChecking comments for post "${postInfo.title}" (${postFile})`);

    if (getIssueIdForPost(postFile) !== null) {
        console.log(`EXISTING !`);
        return;
    }
    console.log(`Comments not existing. Creating github issue.`);

    let issueData = {
        owner: 'skwi',
        repo: 'skwi.github.io',
        title: `Commentaires pour "${postInfo.title}"`,
        body: `Ecrivez ci dessous vos commentaires pour l'article "${postInfo.title}", ils seront automatiquement affichés sur le blog.`
    };

    github.authenticate({
        type: "token",
        token: process.env.GITHUB_TOKEN
    });
    github.issues.create(issueData)
        .then(res => {
            setIssueIdForPost(postFile, res.data.number);
            console.log(`SUCCESS : Comments created for post "${postInfo.title}" (${postFile})`);
        })
        .catch(error => {
            console.log('FAILED : ' + error);
            process.exit(1);
        })
        ;
});
