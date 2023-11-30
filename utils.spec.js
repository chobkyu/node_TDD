const utils = require('./utils')
const assert = require('assert');

describe('utils.js 모듈의 capitalize() 함수는 ',() => {
    it('문자열의 첫번째 문자를 대문자로 변환한다.',() => {
        //테스트 코드 작성
        const result = utils.capitaialize("hello");
        assert.equal(result,'Hello');
    })
})