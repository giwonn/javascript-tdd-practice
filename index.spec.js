const app = require('./index');
const request = require('supertest'); // api 테스트할 때 좋음

describe('GET /users는', () => {
  it('...', (done) => {
    request(app)
      .get('/users')
      .end((err, res) => {
        console.log(res.body);
        done();
      });
  });
});
