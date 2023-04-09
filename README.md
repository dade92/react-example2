# REACT-EXAMPLE

This project is a  "sample" project for React main features. It contains also
a Jenkinsfile for Jenkins integration and a docker compose file to deploy
an entire application.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser. 
The page will reload if you make edits.

### `npm run start:local`

Runs the app pointing to a local web server. See [https://github.com/dade92/spring-example2](spring-example-2) for a backend app. \
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### `npm run test`

Launches all tests.\
You can also run a specific test using ` npm run test -- testName.tsx`

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## Deploy the entire application

You can deploy the frontend, backend, the database and a 
reverse Nginx proxy by running `./run.sh`. Then you can access
the application at `http://localhost`.\
See the other repositories for the downloaded images.