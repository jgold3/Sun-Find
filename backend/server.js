const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const url = process.env.ATLAS_URL;
mongoose.connect(url, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB Connected!");
});

const locationsRouter = require('./routes/locations');
const usersRouter = require('./routes/users');

app.use('/locations', locationsRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is Running on port: ${port}`);
});