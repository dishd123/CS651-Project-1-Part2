# CS651 Project 1 Part 2: StudyBoard on AWS EC2 with Docker

StudyBoard is the website of our group's startup idea: a computer vision and machine learning product that turns photos of class whiteboards and notes into readable notes, flashcards and a study tutor. This repository holds the full site source and deploys it on an Amazon EC2 server inside one Docker container with Apache httpd, using an image stored in Amazon ECR.

| Item | Value |
| --- | --- |
| Live site | http://studyboard.tech/ |
| Backup address | http://23.21.105.57/ (the server's Elastic IP) |
| Wiki | https://github.com/dishd123/CS651-Project-1-Part2/wiki |
| YouTube video | VIDEO-LINK-PENDING |
| Special Issues PDF | [docs/Special-Issues.pdf](docs/Special-Issues.pdf) |
| Build and deploy steps | [DockerContainer/README.md](DockerContainer/README.md) |

The server runs in an AWS Academy Learner Lab, which stops it whenever no lab session is open (sessions last 4 hours). If the site does not load, the lab is not running; the wiki and the video show it running at this address. The site is plain HTTP: type `http://` in front of the address, and if Chrome says the connection is not secure, choose Continue to site.

## Group

CS651 Web Systems, CSU East Bay, Fall 2026: Disha Deshmukh, Huda Joad, Venkatesh Katta, Ndeye Traore.

## What is where

| Path | What it holds |
| --- | --- |
| `DockerContainer/` | `Dockerfile`, `httpd.conf`, and the README with the build and deploy steps |
| `index.html`, `about.html`, `contact.html` | The Home, About and Contact pages |
| `app/`, `login/` | The App page and the Sign In page. Each HTML file is an empty shell that loads a React entry point from `src/` |
| `src/` | The React source: the App page (`src/app/`), the Sign In page (`src/login/`) and the shared menu `SiteNav.jsx` |
| `css/site.css`, `js/site.js` | The site's styles, and the shared menu, footer and contact form script for the plain HTML pages |
| `public/images/` | The photos used on the pages |
| `docs/Special-Issues.pdf` | The answers to Special Issues 1 and 2 |

## Run it locally

With Docker Desktop, from the repository root:

```
docker build -f DockerContainer/Dockerfile -t project1-part2:local .
docker run --rm -p 8080:80 project1-part2:local
```

Then open `http://localhost:8080`. Without Docker: `npm install`, then `npm run dev`.

AI use: Claude (Anthropic), ChatGPT (OpenAI) and GitHub Copilot helped plan the deployment steps, work through code and commands, check AWS prices and limits, and draft and edit the documentation. I, Disha Deshmukh, ran every command, made every console change and took every screenshot.
