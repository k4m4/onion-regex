declare namespace onionRegex {
	interface Options {
		/**
		Only match an exact string. By default, it matches any onion links in a string. Useful with `RegExp#test()` to check if a string is an onion link.
		@default false
		*/
		readonly exact?: boolean;
	}
}

declare const onionRegex: {
	/**
	Returns a regex for matching version 2 (v2) onion links.
	@example
	```
	import onionRegex = require('onion-regex');
	onionRegex.v2({exact: true}).test('xmh57jrzrnw6insl.onion');
	//=> true
	```
	*/
	v2: (options?: onionRegex.Options) => RegExp;

	/**
	Returns a regex for matching version 3 (v3) onion links.
	@example
	```
	onionRegex.v3({exact: true}).test('vww6ybal4bd7szmgncyruucpgfkqahzddi37ktceo3ah7ngmcopnpyyd.onion');
	//=> true
	```
	*/
	v3: (options?: onionRegex.Options) => RegExp;

	/**
	Returns a regex for matching onion links.
	@example
	```
	import onionRegex = require('onion-regex');
	onionRegex().test('nodejsrocks xmh57jrzrnw6insl.onion');
	//=> true
	```
	*/
	(options?: onionRegex.Options): RegExp;
};

export = onionRegex;
