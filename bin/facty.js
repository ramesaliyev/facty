#! /usr/bin/env node
const { factorize } = require('../src');

/**
 * Get and fix arguments.
 */
const argMap ={
  '0': undefined,
  'true': true,
  'false': false
};

const args = process.argv.slice(2).map(arg =>
  argMap.hasOwnProperty(arg) ? argMap[arg] : arg
);

const [
  n,
  factorizator,
  primalityTester,
  GCDCalculator,
  full
] = args;

const factors = factorize(n, {
  factorizator,
  primalityTester,
  GCDCalculator,
  full
});

console.log(factors);