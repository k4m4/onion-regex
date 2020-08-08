'use strict';
const v2 = '[a-z2-7]{16}.onion';
const v3 = '[a-z2-7]{56}.onion';

const onion = options => options && options.exact ?
	new RegExp(`(?:^${v2}$)|(?:^${v3}$)`) :
	new RegExp(`${v2}|${v3}`, 'g');

onion.v2 = options => options && options.exact ? new RegExp(`^${v2}$`) : new RegExp(v2, 'g');
onion.v3 = options => options && options.exact ? new RegExp(`^${v3}$`) : new RegExp(v3, 'g');

module.exports = onion;
