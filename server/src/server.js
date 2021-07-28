const express = require('express');
const routes = require('./routes');

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://hardwarestr:hardwarestr@cluster0.mnndu.mongodb.net/HardwareWebStore?retryWrites=true&w=majority');

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333);