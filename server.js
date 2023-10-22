const app = require('./app.js');
const http = require('http');
const myServer = http.createServer(app);

myServer.listen(8080, () => {
    console.log('Portfolio website is running on port 8080')
})