# React Application with JWT Authentication

### Overview

This is an example application that serves an ExpressJS JSON api to a React client application. The React application is configured for a basic JWT authentication flow **WITHOUT** using redux. Great for those of you that are somewhat familiar with Node, Express, and Mongoose, but want to see an implementation of React + React Router with JWT authentication.

### Technologies

- NodeJS + Express + Mongoose on the back
- React client application on the front
- React Router 4.*
- Milligram CSS so it doesn't look like garbage
- JSON Web Token authentication flow

### Installation + Development

1. `git clone` this repository to your local machine.

2. run `npm install` from the cloned repo directory.

3. create a `.env` file at the root of the application, adjacent to `server.js`.

   In the `.env` file, you can declare the following environment variables: `JWT_SECRET`, `MONGODB_URI`, and `PORT`. For example:

   ```
   JWT_SECRET=BOOOOOOOOOOOOOM
   MONGODB_URI=mongodb://localhost/react-express-jwt
   PORT=3001
   ```

4. It's recommended that you run the api server on port 3001 while developing locally, as the client app will default to port 3000.

5. Make sure `mongod` is running by running… ahem… `mongod`

6. From that point you can run the api server either by using `nodemon` or just running `node server.js`

7. Now for the client application. `cd client`

8. Install the client app's dependencies with `npm install`

9. From the client directory, run `npm start` to boot up the client application.

10. $$$ Profit



