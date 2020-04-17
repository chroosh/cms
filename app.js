import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import path from 'path';

import routes from './routes/index.js';

const app = express();


mongoose.connect('mongodb://localhost');


// app.use() gets called each time a request is hit to the server
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// catch 400
app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(400).send(`Error: ${res.originUrl} not found`);
    next();
});

// catch 500
app.use((err, req, res, next) => {
    console.log(err.stack)
    res.status(500).send(`Error: ${err}`);
    next();
});


// frontend
app.use(express.static(path.join(__dirname, 'client/build')));

// serves index html for '/
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
})




routes(app);
export default app;
