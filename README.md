# Facty
[![Downloads](https://img.shields.io/npm/dt/facty.svg)](https://www.npmjs.com/package/facty)
[![NpmVersion](https://img.shields.io/npm/v/facty.svg)](https://www.npmjs.com/package/facty)

This repo contains some known algorithms to find prime factors of given integer.
For further reading about algorithms see [my research path](/RESEARCH_PATH.md).

#### Factorization Algorithms
  - [Fermat's Factorization Method](https://www.wikiwand.com/en/Fermat%27s_factorization_method)
  - [Pollard's rho Algorithm](https://www.wikiwand.com/en/Pollard%27s_rho_algorithm)

#### Primality Testing Algorithms
  - [AKS Primality Tester](https://www.wikiwand.com/en/AKS_primality_test)
  - [Fermat's Primality Tester](https://www.wikiwand.com/en/Fermat_primality_test)

#### Greatest Common Divisor (GCD) Calculating Algorithms
  - [Using Prime Factorizations](https://www.wikiwand.com/en/Greatest_common_divisor#/Using_prime_factorizations)

# Warning
Since these codes are for demonstration purpose only; main focus was keep it as readable as possible. Therefore there might be performance issues (we need benchmarks) and problems with big numbers (although i've used mathjs to avoid that) etc. I don't suggest to use or trust this code in production-like environments. But you can give a try? Other than that i think you can use this in demonstration projects, prototype-like projects and/or projects that doesn't highly depend on performance etc. Or use this everywhere and improve the performance please. :)

# What's Missing?
- More algorithms might be introduced such as basic ones like `trial division` duh!
- Some performance benchmarks would be nice.

# Prerequisites
I've only tested with followings.
- NodeJS (>= 8.11)
- NPM (>= 6.4)

# Factorizer Options
|name|type|default|info|options |
|---|---|---|---|---|
|factorizator|enum|`fermat`|Algorithm going to use for factorization.|`fermat` or `pollard-rho`|
|primalityTester|enum|`fermat`|Algorithm going to use for primality testing. |`fermat` or `aks`|
|gcdCalculator|enum|`prime`|Algorithm going to use for GCD calculations.|`prime`|
|full|boolean|`false`|Whether return full set of factors or not.|`true` or `false`|

# CLI Notes
- Arguments other than first one are optionals.
- You can skip an argument by providing `0`.

# CLI Usage: Global
##### Installation
    $ npm i facty -g
##### Usage
    $ facty <number> [factorizator] [primalityTester] [gcdCalculator] [full]
##### Examples
    $ facty 120
    $ facty 120 fermat aks
    $ facty 120 pollard-rho
    $ facty 120 0 0 0 true

# CLI Usage: NPX
##### Direct Usage
    $ npx facty <number> [factorizator] [primalityTester] [gcdCalculator] [full]
##### Examples
    $ npx facty 120
    $ npx facty 120 fermat aks
    $ npx facty 120 pollard-rho
    $ npx facty 120 0 0 0 true

# Module Usage
##### Installation
    $ npm i facty --save
##### Import
    const facty = require('facty');
    // or
    const { factorize } = require('facty');
or ES6

    import facty from 'facty';
    // or
    import { factorize } from 'facty';
##### Usage
    factorize(number, {
      factorizator: 'fermat',
      primalityTester: 'fermat',
      gcdCalculator: 'prime',
      full: false
    });

##### Examples
    factorize(120);
    // [2, 3, 5]

    factorize(120, { full: true });
    // [2, 2, 2, 3, 5]

# Cloning Repo & Running Tests
##### Cloning
    $ git clone git@github.com:ramesaliyev/facty.git
##### Installing Dependencies
    $ npm i
##### Running Tests
    $ npm t

# Known Issues
Right now the only known issue is that i dont know any issue. (Take this socrates!)

# License
Licensed under MIT. So use it as you want.
