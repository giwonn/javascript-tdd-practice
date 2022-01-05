// spec.js는 보통 테스트 코드 작성할 때 사용함
const utils = require('./utils');
const should = require('should'); // node의 assert 대신 사용할만한 서드파티 라이브러리

// 단위테스트
describe('utils.js모듈의 capitalize() 함수는', () => {
  it('문자열의 첫번째 문자를 대문자로 변환한다.', () => {
    const result = utils.capitalize('hello');
    result.should.be.equal('Hello');
  });
});
