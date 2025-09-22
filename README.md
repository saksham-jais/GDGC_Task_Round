
# Optivize Project

This repository contains the full-stack optivize application, a modern AI-powered SaaS platform that enables automation of business workflows, with a React frontend and Node.js backend using a MongoDB database.

## Folder Structure

- `/backend` - Node.js API Gateway with service proxying, JWT auth, MongoDB integration, and microservice health management.
- `/frontend` - React frontend application with Tailwind CSS UI, login/signup forms, dashboard, and analytics display.

## Technologies Used

- Frontend: React 18, Tailwind CSS, Vite
- Backend: Node.js, Express.js, MongoDB, Mongoose, JWT authentication, bcrypt password hashing
- Other: Axios for HTTP requests, PostCSS, ESLint

## Quick Start

### Backend Setup

1. Navigate to `/backend`
2. Install dependencies: `npm install`
3. Setup MongoDB and `.env` with connection string and JWT secret
4. Start backend server: `npm run dev`

### Frontend Setup

1. Navigate to `/frontend`
2. Install dependencies: `npm install`
3. Configure `.env` with `VITE_API_BASE_URL` pointing to backend server URL
4. Start frontend server: `npm run dev`

## Features

- User registration and login with JWT
- Role-based and per-user rate limiting
- Service health checks and failover proxying
- Dynamic AI automation stats dashboard
- Responsive, animated UI with Tailwind CSS
- Modular backend architecture for user, order, and stats APIs

## Contributing

Contributions welcome! Please submit pull requests or issues for bugs and feature requests.

## License

MIT License
