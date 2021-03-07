# First Express Server
Install dependencies with: 
```
npm install
```

Run with:
```
node index.js
```
the server runs in port 3000.

For developing, you can run it using:
```
nodemon index.js
```
to restart the server with each change.

## Allowed requests
- GET: `/`
- GET: `/r/:oneparam`
- POST: `/r/:oneparam`
- GET: `/search?q=whatever`