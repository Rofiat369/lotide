const assertArrayEqual = require('./assertArrayEqual');
const assertEqual = require('./assertEqual');
const assertObjectEqual = require('./assertObjectEqual');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const head   = require('./head');
const letterPositions = require('./letterPositions');
const map = require('./map');
const middle = require('./middle');
const pigLatin = require('./pig-latin');
const reverse = require('./reverse');
const tail   = require('./tail');
const takeUntil = require('./takeUntil');
const without = require('./without');

module.exports = {
  assertArrayEqual: assertArrayEqual,
  assertEqual: assertEqual,
  assertObjectEqual: assertObjectEqual,
  countLetters: countLetters,
  countOnly: countOnly,
  eqArrays: eqArrays,
  eqObjects: eqObjects,
  findKey: findKey,
  findKeyByValue: findKeyByValue,
  head:   head,
  letterPositions: letterPositions,
  map: map,
  middle: middle,
  pigLatin: pigLatin,
  reverse: reverse,
  tail:   tail,
  takeUntil: takeUntil,
  without: without
};