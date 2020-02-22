const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const server = require('http').createServer(app);

const routes = require('./routes');


const port = 3007;

//Cors Module
app.use(cors());

//Body Parser
app.use(bodyParser.json());

app.use(routes);

const startServer = (port) => {
    console.log('port', port);
    app.listen(port, () => {
        console.log('Server Started'+port);
    });
}

startServer(port);


