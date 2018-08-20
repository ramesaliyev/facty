# About 
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
Since these codes are for demonstration purpose only; main focus was keep it as readable as possible. Therefore there might be performance issues and problems with big numbers etc. I don't suggest to use or trust this code in production-like environments. But still you can use this in demonstration projects, prototype-like projects and/or projects that doesn't highly depend on performance etc.

# What's Missing?
More algorithms might be introduced such as basic ones like `trial division` duh!

# Prerequisites
I've only tested with followings.
- NodeJS (>= 8.11)
- NPM (>= 6.4)

# CLI Notes
- Arguments other than first one are optionals.
- You can skip an argument by providing `0`.

# CLI Usage: Global
##### Installation
    $ npm i facty -g
##### Usage
    $ facty <number> [factorizator] [primalityTester] [GCDCalculator] [full]
##### Examples
    $ facty 120
    $ facty 120 fermat aks
    $ facty 120 pollard-rho
    $ facty 120 0 0 0 true
  
# CLI Usage: NPX
##### Direct Usage
    $ npx facty <number> [factorizator] [primalityTester] [GCDCalculator] [full]
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
    factorize(number, options);

    options = {
      factorizator: ('fermat' || 'pollard-rho'),
        // Algorithm going to use for factorization.
        // Default: fermat

      primalityTester: ('fermat' || 'aks'),
        // Algorithm going to use for primality testing.
        // Default: fermat

      GCDCalculator: ('prime'),
        // Algorithm going to use for GCD calculations.
        // Default: prime

      full: (true || false)
        // Whether return full factors sets or not.
        // Default: false
    };

##### Examples
    factorize(120);
    // [2, 3, 5]

    factorize(120, { full: true });
    // [2, 2, 2, 3, 5]

# Known Issues
Right now the only known issue is that i dont know any issue. (Take this socrates!)

# License
Licesed under MIT. So use it as you want.