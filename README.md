# REACT-EXAMPLE

This project is a  "sample" project for React main features. It contains also
a Jenkinsfile for Jenkins integration and a docker compose file to deploy
an entire application made by frontend (React + Typescript) backend (Java/Kotlin with Spring boot)
a database (Mongodb) and a simple reverse proxy (Nginx).
Go to section [Deploy the entire application](#Deploy the entire application) for further instructions about deploy.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the frontend app in the development mode (backend responses are mocked using mirage.js).\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
Remember that the page will reload if you make edits.

### `npm run start:local`

Runs the app pointing to the actual local web server. 
See [https://github.com/dade92/spring-example2](spring-example-2) for a backend app 
and instructions on how to run that. \
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run test`

Launches all tests.\
You can also run a specific test using ` npm run test -- testName.tsx`

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## Deploy the entire application

You can deploy the entire application by running `./run.sh`.
This script just runs one by one the images contained in the docker compose file inside the deploy directory.
It deploys the frontend, backend, the database, the mongo-express and the reverse Nginx proxy. \
Then you can access the application at `http://localhost`.\
See the other dade92 repositories for the downloaded images.