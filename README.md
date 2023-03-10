# DevOps Code Challenge

## Summary

This project is dedictated for evaluating devops candidates. The application consists of 2 subprojects, a frontend and a backend. The frontend is a React application that uses vite to run. The backend is a typescript application using nodemon & ts-node to run in the development environment.

Open a browser and navigate to http://localhost:5173 to load the web application. The frontend is really simple as it consists of a title, 2 buttons and some response text. Click `ping` button to send an http request to the backend. On success, the frontend will render a success message. On failure, the frontend will display an error message. The backend is an `express` server that exposes the `/ping` endpoint.

## Get Started - Development

Prerequisites:

- `nodejs` >= `18.12.0`
- `yarn` >= `1.22.19`

### Frontend

- `cd frontend`
- `yarn`
- `yarn dev`

### Backend

- `cd backend`
- `yarn`
- `yarn dev`

### Development Environment Functionality

- Hot reload. Writing to a file in the backend or frontend shall result in a hot reload.

## Environment Variables

- The frontend accepts `.env` file
  - `VITE_SERVER_URL` string (base url) **NOTE** Vite bakes in environment variables at BUILD time, not runtime.
- The backend accepts 3 environment Variables
  - PORT number
  - HOST string
  - HTTP_PROTOCOL string

## Production Environment Functionallity

- Production environments will not support hot reload
- The frontend compiles down to a static web application
  - `frontend/dist/index.html

## Get Started - Production

You should be able to have the frontend be able to communicate with the backend locally in production mode.

Prerequisites:

- `nodejs` >= `18.12.0`
- `yarn` >= `1.22.19`

### Frontend

```bash
cd frontend

# Install dependencies
yarn --frozen-lockfile --non-interactive

# Build the image
# The following command will use environment variables defined in .env.production
yarn build --mode production

# DEBUG ONLY
# This will start a little web server that will serve the web app for you locally
yarn serve dist
```

### Backend

```bash
cd frontend

# Install dependencies
yarn --frozen-lockfile --non-interactive

# Build the app
yarn build

# Run the app
yarn start
```
