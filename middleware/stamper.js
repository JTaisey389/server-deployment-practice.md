'use strict';

// BUILD OUT A MIDDLEWARE
//Middleware is the moddification to the request
// unless it starts with an (error), if the callback signature contains "next", it is considered middleware
// When you use middleware you always use next, the only time you don't is when it's with an error
module.exports = (req, res, next) => {
  req.timestamp = new Date();
  next();
}