const expect = require('chai').expect;
const request = require('supertest');

describe('Routes', ()=> {

  beforeEach(() => {
    this.server = require('../src/server.js');
  });

  afterEach(() => {
    this.server.close();
  });

  it('Test Status Route', (done) => {
  request(this.server)
    .get('/status')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200)
    .expect((res) => {
      expect(res.body.healthy).to.be.true;
    })
    .end(done)
});

  it('Dynamic Routes Test');

});
