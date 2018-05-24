const request = require('supertest');
const app = require('../app');

describe('Test the root path', () => {
  it('should response the GET method', () => (
    request(app).get('/').expect(200)
  ));

  it('should response the 404 for a random route', () => (
    request(app).get('/randomroute').expect(404)
  ));
});
