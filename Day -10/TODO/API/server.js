var express = require('express');
var taskHandler = require('./handlers/taskhandler');
var cors = require('cors');

const app = express();
const port = 8000;
const db = require('./config/mongo');

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/api/task', taskHandler);

app.listen(port, function(err) {
    if(err) {
        console.log('Error starting server');
    }
    console.log('Server running on', port);
});