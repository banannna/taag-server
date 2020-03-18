## taag server
taag is a saas that helps you visualize your github tasks and issues in a graph.

### install
- `git clone https://github.com/banannna/taag-server`
- `cd` to the directory
- run `npm install`
- you will need to add a `.env` file to the root dir. this is how it should look:
	```
	PORT=8000
  NODE_ENV=dev
  JWT_SECRET=<jwt-secret-here🤫>
  GITHUB_CLIENT_ID=<your-github-client-id>
  GITHUB_CLIENT_SECRET=<github-client-secret-here>
  MONGODB_URI=<jwtmongodb-uri-here>
	```

### run
- `nodemon server.js`