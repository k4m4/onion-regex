import test from 'ava';
import m from './';

const v2 = [
	'xmh57jrzrnw6insl.onion',
	'facebookcorewwwi.onion',
	'3g2upl4pq6kufc4m.onion',
	'fncuwbiisyh6ak3i.onion'
];

const v3 = [
	'vww6ybal4bd7szmgncyruucpgfkqahzddi37ktceo3ah7ngmcopnpyyd.onion',
	'32zzibxmqi2ybxpqyggwwuwz7a3lbvtzoloti7cxoevyvijexvgsfeid.onion',
	'ozmh2zkwx5cjuzopui64csb5ertcooi5vya6c2gm4e3vcvf2c2qvjiyd.onion',
	'jamie3vkiwibfiwucd6vxijskbhpjdyajmzeor4mc4i7yopvpo4p7cyd.onion'
];

const onionsNot = [
		'nikolaskama.me',
		'0x281055afc982d96fab65b3a49cac8b878184cb16',
		'nikolaskam@gmail.com foo',
		'absdefghijklmn[IPv6:2001:db8::2]',
		'https://abc.xyz',
];

test('Exact onion links', t => {
	for (const x of v2) {
		t.true(m({exact: true}).test(x));
	}
	for (const x of v3) {
		t.true(m({exact: true}).test(x));
	}
});

test('Non-exact onion links', t => {
	for (const x of v2) {
		t.is((m().exec(`foo ${x} bar`) || [])[0], x);
	}
	for (const x of v3) {
		t.is((m().exec(`foo ${x} bar`) || [])[0], x);
	}
});

test('Non-onion links', t => {
	for (const x of onionsNot) {
		t.false(m({exact: true}).test(x));
	}
});

test('v2 onion links', t => {
	for (const x of v2) {
		t.true(m.v2({exact: true}).test(x))
	}
});

test('v3 onion links', t => {
	for (const x of v3) {
		t.true(m.v3({exact: true}).test(x))
	}
});