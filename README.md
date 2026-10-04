# CS651 Project 1 — StudyBoard

StudyBoard is a Computer Vision and ML startup concept for connecting whiteboard photographs with the spoken explanation that accompanied them. This repository contains the Project 1 frontend foundation:

- Static Home, About, and Contact pages using HTML, CSS, Bootstrap, and client-side JavaScript.
- A React SPA at `/app/` with reusable session, board, flashcard, and tutor components; state changes demonstrate session selection, flashcard flipping/navigation, and tutor interaction.
- A React-only sign-in page at `/login/`. Its create-account form appears beside the original login form on wide screens and returns the newly entered login/password values to the login form when submitted.
- An Apache Docker image in [`DockerContainer/`](DockerContainer/) for the EC2 deployment portion.

## Run in WSL

Install Node.js 20+ and Docker Desktop/Engine in WSL if they are not already available. Then run:

```bash
npm install
npm run dev -- --host 0.0.0.0
```

Visit the URL Vite prints, then test `/`, `/about.html`, `/contact.html`, `/app/`, and `/login/`.

## Production build

```bash
npm run build
```

The generated `dist/` directory contains the deployable site.

## Docker / Apache

From the repository root:

```bash
docker build -f DockerContainer/Dockerfile -t studyboard:project1 .
docker run --rm -p 8080:80 studyboard:project1
```

Open <http://localhost:8080>. Replace the marked image placeholders with the teammate's final image assets before submission. Project 2 services, authentication, Gemini, ADK, Firestore, and AWS setup documentation are intentionally out of scope for this implementation.
