# StudyBoard Apache Docker container

This folder contains the Apache container required for Project 1 Part 2. The multi-stage `Dockerfile` installs the frontend dependencies, runs the Vite production build, and copies the finished static site into an Apache HTTP server image.

From the project root:

```bash
docker build -f DockerContainer/Dockerfile -t studyboard:project1 .
docker run --rm -p 8080:80 studyboard:project1
```

Open <http://localhost:8080>. The same image can be copied to an Ubuntu EC2 instance with Docker installed and exposed through the instance security group's HTTP port 80.
