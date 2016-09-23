const assert = require('chai').assert;
const compose = require('./fp-helpers').compose;

describe('compose()', () => {

  it('returns a noop for no input', () => {
    var f = compose();
    assert.isFunction(f);
    assert.doesNotThrow(() => f());
    assert.equal(f(), undefined);
  });

  it('returns the same functional pattern for one input', () => {
    var f = compose((a, b) => a + b);
    assert.equal(f(2,40), 42);
  });

  it('returns the composition of all functions', () => {
    var f = compose(y => y - 5, x => x * 3, (a, b) => a + b);
    assert.equal(f(2,40), (42 * 3) - 5);
  });

});
