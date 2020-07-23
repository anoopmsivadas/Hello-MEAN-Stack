var express = require('express');
var Task = require('./models/task');

const app = express();

const port = 8000;

app.get('/api', function(request, response) {
    return response.send('Hello MEAN STACK!');
})

app.listen(port, function(error) {
    if(error) {
        console.log('Error starting server');
    }
    console.log('Server Running on', port);
});