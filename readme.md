# onion-regex [![Build Status](https://travis-ci.org/k4m4/onion-regex.svg?branch=master)](https://travis-ci.org/k4m4/onion-regex) [![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)

> Regular expression for matching .onion Tor links (v2 & v3).


## Install

```
~ ❯❯❯ npm install onion-regex
```


## Usage

```js
const onionRegex = require('onion-regex');

onionRegex().test('nodejsrocks xmh57jrzrnw6insl.onion');
//=> true

onionRegex({exact: true}).test('nodejsrocks xmh57jrzrnw6insl.onion foo');
//=> false

onionRegex.v2({exact: true}).test('xmh57jrzrnw6insl.onion');
//=> true

onionRegex.v3({exact: true}).test('vww6ybal4bd7szmgncyruucpgfkqahzddi37ktceo3ah7ngmcopnpyyd.onion');
//=> true

'nodejsrocks 3g2upl4pq6kufc4m.onion rainbow facebookcorewwwi.onion'.match(onionRegex());
//=> ['3g2upl4pq6kufc4m.onion', 'facebookcorewwwi.onion']
```


## API

### onionRegex([options])

Returns a regex for matching onion links.

### onionRegex.v2([options])

Returns a regex for matching version 2 (v2) onion links.

### onionRegex.v3([options])

Returns a regex for matching version 3 (v3) onion links.

#### options.exact

Type: `boolean`<br>
Default: `false` *(Matches any onion link in a string)*

Only match an exact string. Useful with `RegExp#test()` to check if a string is an onion link.


## License

MIT © [Nikolaos Kamarinakis](https://nikolaskama.me)