const request = require('supertest');
const app = require('../app');

describe('Test the root path', () => {
  it('should response the GET method', () => (
    request(app).get('/').expect(200)
  ));

  it('should response `/graphiql` STATUS 200', () => (
    request(app).get('/graphiql').expect(200)
  ));
});
