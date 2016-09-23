const COMMAND_LINE_OPTIONS = {
  alias: {
    n: 'number',
    i: 'iterations'
  }
};

const compose = require('./src/fp-helpers').compose;
const {freqToString, percent, generateRandoms, initFreq} = require('./src/random-stats');
const argv = require('minimist')(process.argv.slice(2), COMMAND_LINE_OPTIONS);

const fn = compose(freqToString, percent, generateRandoms, initFreq);
console.log(fn(argv.n, argv.i));
