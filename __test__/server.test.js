'use script';

const supertest = require('supertest');
const server = require('../server.js');
const request = supertest(server.app); //This supertest takes in our server application which includes out routes, middleware and error handling

describe('API Server', () => { //This is our testing suite with individual test's

  it('handles invalid requests', async () => {
    const response = await request.get('/foo');
    expect(response.status).toEqual(404);
  })

  it('handles errors', async () => {
    const response = await request.get('/bad');
    expect(response.status).toEqual(500);
    expect(response.body.route).toEqual('/bad');
  })

  it('/ works', async () => {
    const response = await request.get('/');
    expect(response.status).toEqual(200);
    expect(response.text).toEqual('Hello World');
  })

  it('/data works', async () => {
    const response = await request.get('/data');
    expect(response.status).toEqual(200);
    expect(typeof response.body).toEqual('object');
  })

  it('stamper middleware works', async () => {
    const response = await request.get('/data');
    expect(response.status).toEqual(200);
    expect(response.body.time).toBeDefined();
  })
});