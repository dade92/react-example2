# REACT-EXAMPLE

This project is a  "sample" project for React main features. It contains also
a Jenkinsfile for Jenkins integration and a docker compose file to deploy
an entire application made by frontend (React + Typescript) backend (Java/Kotlin with Spring boot)
a database (Mongodb) and a simple reverse proxy (Nginx).
Go to section [Deploy the entire application](#Deploy the entire application) for further instructions about deploy.

## Available Scripts

First thing first, run a `npm install` to install the needed dependencies. \
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

# CI/CD
The project has a pipeline attached, configured on github, that starts on every push. Pushes on master also
trigger docker to build the image

## Deploy the entire application

You can deploy the entire application by running `./run.sh`.
This script just runs one by one the images contained in the docker compose file inside the deploy directory.
Then you can access the application at `http://localhost`.\
At the moment, the BE and the database are deployed on
raspberry pi, so in order to deploy everything you should:
- Run on raspberry pi the script `./run.sh` inside the folder `/deploy` of the project spring-example2. This 
will run the backend and the database of the application.
- Run inside this folder `./deploy` the script `./run.sh`. This will run the frontend
and the reverse proxy.

See the other dade92 repositories for the downloaded images.