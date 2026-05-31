# SkillPulse

SkillPulse is a sample full-stack workspace with a React frontend, Express backend, Docker support, SonarQube analysis, Kubernetes manifests, and Argo CD application configuration.

## Services

- `frontend` — React + Vite web UI
- `backend` — Express API service

## Local Docker development

```bash
docker compose up --build
```

Frontend: http://localhost:4173
Backend: http://localhost:4000/api/status

## SonarQube

Use the root `sonar-project.properties` file to analyze the project with SonarQube.

## Kubernetes

Apply the manifests from `k8s/`:

```bash
kubectl apply -f k8s/
```

## Argo CD

Deploy the application from `argocd/skillpulse-application.yaml`.
