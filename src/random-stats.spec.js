const assert = require('chai').assert;
const initFreq = require('./random-stats').initFreq;

describe('initFreq()', () => {

  it('throws for invalid input', () => {
    assert.throw(() => initFreq(0, 1));
    assert.throw(() => initFreq(1, 0));
    assert.throw(() => initFreq(10, -1));
    assert.throw(() => initFreq(-1, 10));
    assert.throw(() => initFreq(10.1, 10));
    assert.throw(() => initFreq(10, 10.1));
    assert.throw(() => initFreq(10.1, 10.1));
  });

  it('returns an array', () => {
    assert.isArray(initFreq(1, 1));
    assert.isArray(initFreq(2, 1));
  });

  it('returns an array the length of its first argument', () => {
    assert.equal(initFreq(1, 1).length, 1);
    assert.equal(initFreq(2, 1).length, 2);
    assert.equal(initFreq(100, 1).length, 100);
  });

  it('returns an array of 0s', () => {
    function check(arr) {
      for (var i = 0; i < arr.length; i++) {
        assert.equal(arr[i], 0, `arr[${i}] is ${arr[i]}`);
      }
    }
    check(initFreq(1, 1));
    check(initFreq(2, 1));
    check(initFreq(100, 1));
  });

  it('has an "iteration" in the resulting array', () => {
    assert.equal(initFreq(1, 1).iterations, 1);
    assert.equal(initFreq(1, 2).iterations, 2);
    assert.equal(initFreq(1, 100).iterations, 100);
  });
});
