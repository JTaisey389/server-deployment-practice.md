'use script';

const supertest = require('supertest');
const server = require('../server.js');
const request = supertest(server.app); //This supertest takes in our server application which includes out routes, middleware and error handling

describe('SERVER TESTS', () => { //This is our testing suite with individual test's

  it('should handle not found routes - 404', async () => {
    // this is an assertion, as part of a test
    const response = await request.get('/not-there');
    expect(response.status).toEqual(404);
  })

  it('should send a proper response', async () => {
    const response = await request.get('/data');
    expect(response.status).toEqual(200);
    expect(response.body.time).toBeDefined();
  })
});