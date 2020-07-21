var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/testdata');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Database connection Failed'));

db.once('Open', function() {
    console.log('Database Connection Success');
});