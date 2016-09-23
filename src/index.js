// const express = require('express');
const compose = require('./fp-helpers').compose;
const {freqToString, percent, generateRandoms, initFreq} = require('./random-stats');

const fn = compose(freqToString, percent, generateRandoms, initFreq);
console.log(fn(10, 10000000));
