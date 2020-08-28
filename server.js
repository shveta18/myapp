const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

// pulling items file
const items = require('./routes/api/items');

const app = express(); 

// Bodyparser middleware
app.use(bodyParser.json());

//DB config
const db = require('./config/keys').mongoURI;

// connecting to mongodb
mongoose.connect(db)
.then(() => console.log('MongoDB connection successful!'))
.catch(err => console.log(err));

//use routes
app.use('/api/items', items);

if(process.env.NODE_ENV==='production') {
    app.use(express.static ('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve (__dirname, 'client', 'build', 'index.html'));
    });
}

const port = process.env.PORT || 3000;

app.listen(port, () => console.log('Server started on port' + port));