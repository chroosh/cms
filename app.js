import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import path from 'path';
import routes from './routes/index.js';

const app = express();

const connection ="mongodb+srv://chroosh:dSkeo9qP4pRGEelV@cluster0-mbnns.mongodb.net/test?retryWrites=true&w=majority"
mongoose.connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));


// app.use() gets called each time a request is hit to the server
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(path.resolve(), 'client/build')));

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

app.get('*', (req, res) => {
	res.sendFile(path.join(path.resolve(), '/client/build/index.html'));
});


routes(app);
export default app;
