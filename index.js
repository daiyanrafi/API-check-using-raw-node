const http = require('http');
const { handleReqRes } = require('./helpers/handleReqRes');

const app = {};

app.config = {
    port: 3000,
};

// create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    console.log(app);
    server.listen(app.config.port, () => {
        console.log(`yo boi its listing to ${app.config.port}`);
    });
};

// HANDLE REQ RESPONSE

app.handleReqRes = handleReqRes;
// start the server

app.createServer();
