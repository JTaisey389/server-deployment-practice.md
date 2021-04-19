'use strict'

app.get('/cool', (req, res) => { //Basic server response
  res.send('hi')
})

module.exports = (req, res) => { // this files makes it so you can export and import this into other bits of code. Modules.exports is an object
  res.status(404).send({ // We are creating an error when we cannot find the route for the website we are trying to access
    error: 404,
    route: req.path,
    message: 'route not found'
  })
}