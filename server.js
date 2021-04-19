'use strict';

// 3rd party package
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

//app.use is global middleware and every request is ran through this

//This is a internal custom node module
// ANY ERROR handling will live at the bottom of the server file
const notFoundHandler = require('.handlers/404.js')
const errors = require('./handlers/500.js') 
app.use('*', notFoundHandler);
app.use(errors);

app.listen(PORT, () => { // Future use of import and export // We npm i'd express -> now it's available -> now we require it
  console.log('server is up on 3333'); //For backend development it's commonly used to go with 3000 port
});