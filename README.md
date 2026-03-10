# Commerce Dashboard

A basic Azure Static Web Application built with React and Vite. Provides an overview dashboard for e-commerce metrics including revenue, orders, customers, and top products.

## Features

- Summary cards: Total Revenue, Orders, Customers, and Products
- Recent orders table with status badges
- Top products section
- Responsive layout

## Tech Stack

- **React 19** – UI framework
- **Vite 7** – Build tooling and dev server
- **Azure Static Web Apps** – Hosting platform

## Getting Started

### Prerequisites

- Node.js 20 or later

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

## Azure Static Web Apps Deployment

This project is configured to deploy automatically to Azure Static Web Apps via GitHub Actions.

### Setup

1. Create an Azure Static Web App in the Azure Portal.
2. Add the deployment token as a GitHub secret named `AZURE_STATIC_WEB_APPS_API_TOKEN`.
3. Push to `main` — the workflow in `.github/workflows/azure-static-web-apps.yml` handles the rest.

The `staticwebapp.config.json` at the project root configures client-side routing fallback and security headers.
