'use strict'

module.exports = (error, req, res, next) => { //anytime we have error at the begining the error will be fired off first
  res.status(500).send({
    error:500,
    route: req.path,
    query: req.query,
    body: req.body,
    message: `SERVER ERROR: ${error.message}`
  })
}