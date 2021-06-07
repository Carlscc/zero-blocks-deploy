<h1 align=center>ZeroBlocks - A Daily Tracker For Team Updates/Tasks</h1>

![Screenshot 2021-05-29 at 13 27 27](https://user-images.githubusercontent.com/38971399/120432174-749b7d00-c371-11eb-8d5d-bf0ac05b9ce7.png)

🏗  Build using:

- [React](https://reactjs.org/) - a popular user interface JavaScript library
- [Redux](https://redux.js.org/) - centralise and manage the state of JavaScript apps
- [redux-thunk](https://www.npmjs.com/package/redux-thunk) - Allows asynchronous functions inside actions, waits for a response to come back to our reducer
- [React Hooks](https://reactjs.org/docs/hooks-intro.html) - Enable function components to use state and other React features
- [Materialize](https://materializecss.com/) - A modern responsive front-end framework based on Material Design
- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) - Allows HTTP requests to web servers, based on async and await

💈 Third Party Services

- [concurrently](https://www.npmjs.com/package/concurrently) - run multiple commands concurrently

🖥 Backend

- [MongoDB](https://www.mongodb.com/) - Mongo DB is a document oriented NO SQL database
- [Mongoose](https://mongoosejs.com/) - Schema-based solution to model application data
- [Mongoose Sequence](https://www.npmjs.com/package/mongoose-sequence) - A plugin lets you create fields which autoincrements their value
- [Express](https://expressjs.com/) - Node.js web application framework
- [Dotenv](https://www.npmjs.com/package/dotenv) - Module that loads environment variables from a .env file into process.env.

## Quick Start

Clone the repo

```

Install the dependencies and start the app:
### `npm install`

### `npm run server`

Runs the app with the backend express server
Add your own MongoDB URI to the config file and rename it to config.env.
Server http://localhost:5000
```


## 📜  TODO
* Improve accessibility - avoid adding extra nodes to the DOM with fragments, add aria labels
* Prevent modal close to allow multiple deletions of team mumbers
* Extra layer for deleting actions
