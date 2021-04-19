"use strict";

// 3rd party package
const express = require('express');
const app = express();

const errors = require('./handlers/500.js');
const notFoundHandler = require('./handlers/404.js');
const stamper = require('./middleware/stamper.js');
// const PORT = process.env.PORT || 3000;

app.get('/', stamper, (req, res) => {
  res.status(200).send('Hello World')
});

app.get('/data', stamper, (req, res) => {
  const outputObject = {
    10: "even",
    5: "odd",
    "time": req.timestamp
  }
  res.status(200).json(outputObject);
})

app.get('/bad', (req, res, next) => {
  next('you messed up')
});

//app.use is global middleware and every request is ran through this
app.use('*', notFoundHandler); // Global middleware function, all incomming requests will pip through this
app.use(errors);

function start(port) {
  app.listen(port, () => {console.log(`server is up on http://localhost:${port}`);
  // Future use of import and export // We npm i'd express -> now it's available -> now we require it
  //For backend development it's commonly used to go with 3000 port
});
}

module.exports = {
  app: app,
  start: start,
};

//This is a internal custom node module
// ANY ERROR handling will live at the bottom of the server file