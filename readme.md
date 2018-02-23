# onion-regex [![Build Status](https://travis-ci.org/k4m4/onion-regex.svg?branch=master)](https://travis-ci.org/k4m4/onion-regex)

> Regular expression for matching .onion Tor links.


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

onionRegex({exact: true}).test('xmh57jrzrnw6insl.onion');
//=> true

'nodejsrocks 3g2upl4pq6kufc4m.onion rainbow facebookcorewwwi.onion'.match(onionRegex());
//=> ['3g2upl4pq6kufc4m.onion', 'facebookcorewwwi.onion']
```


## API

### onionRegex([options])

Returns a regex for matching onion links.

#### options.exact

Type: `boolean`<br>
Default: `false` *(Matches any onion link in a string)*

Only match an exact string. Useful with `RegExp#test()` to check if a string is an onion link.


## License

MIT © [Nikolaos Kamarinakis](https://nikolaskama.me)