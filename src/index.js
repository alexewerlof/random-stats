// const express = require('express');

function percentCalc(n, max, fraction = 2) {
  var ratio = n / max;
  var pow10 = Math.pow(10, fraction);
  return Math.round(pow10 * 100 * ratio) / pow10;
}

function percent(freq) {
  return freq.map(sum => `${percentCalc(sum , freq.iterations)}%`)
}

function initFreq(nSym, iterations) {
  if (!Number.isInteger(nSym) || nSym <= 0) {
    throw `number of sympols should be a positive integer but is ${nSym}`;
  }
  if (!Number.isInteger(iterations) || iterations <= 0) {
    throw `iterations should be a positive integer but is ${iterations}`;
  }
  var freq = Array(nSym);
  for ( var i = 0; i < nSym; i++) {
    freq[i] = 0;
  }
  freq.iterations = iterations;
  return freq;
}

function rnd (max) {
  return Math.floor(Math.random() * max);
}

function generateRandoms(freq) {
  const iterations = freq.iterations;
  const nSym = freq.length;
  for ( var i = 0; i < iterations; i++) {
    freq[rnd(nSym)]++;
  }
  return freq;
}

function freqToString(freq) {
  for (var i = 0; i < freq.length; i++) {

  }
  return freq.map((val, sym) => `${sym} : ${val}`).join('\n');
}

function noOp() {
  return;
}

function compose(...funcs) {
  if (funcs.length === 0) {
    return noOp;
  }
  return function (/* arguments */) {
    var lastIndex = funcs.length - 1;
    var ret = funcs[lastIndex].apply(this, arguments);
    for (var i = lastIndex - 1; i >= 0; i--) {
      ret = funcs[i](ret);
    }
    return ret;
  }
}

exports.compose = compose;
exports.initFreq = initFreq;

const fn = compose(freqToString, percent, generateRandoms, initFreq);
console.log(fn(100, 1000000000));
