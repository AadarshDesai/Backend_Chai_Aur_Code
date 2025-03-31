require('dotenv').config()
const express = require('express')
const app = express()

const githubData = {
    "login": "aadi2302",
    "id": 134289968,
    "node_id": "U_kgDOCAEaMA",
    "avatar_url": "https://avatars.githubusercontent.com/u/134289968?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/aadi2302",
    "html_url": "https://github.com/aadi2302",
    "followers_url": "https://api.github.com/users/aadi2302/followers",
    "following_url": "https://api.github.com/users/aadi2302/following{/other_user}",
    "gists_url": "https://api.github.com/users/aadi2302/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/aadi2302/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/aadi2302/subscriptions",
    "organizations_url": "https://api.github.com/users/aadi2302/orgs",
    "repos_url": "https://api.github.com/users/aadi2302/repos",
    "events_url": "https://api.github.com/users/aadi2302/events{/privacy}",
    "received_events_url": "https://api.github.com/users/aadi2302/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 0,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2023-05-22T12:22:52Z",
    "updated_at": "2023-05-22T12:22:52Z"
  }

app.get('/', (req,res) => {
    res.send("Hello World");
})

app.get('/twitter', (req, res) => {
    res.send("<h1>AaDi2302</h1>");
})

app.get('/github', (req, res) => {
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
    console.log(`App listening on port ${process.env.PORT}`)
})