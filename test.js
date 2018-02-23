import test from 'ava';
import m from './';

const fixtures = [
		'xmh57jrzrnw6insl.onion',
		'facebookcorewwwi.onion',
		'3g2upl4pq6kufc4m.onion',
		'fncuwbiisyh6ak3i.onion'
];

const fixturesNot = [
		'nikolaskama.me',
		'0x281055afc982d96fab65b3a49cac8b878184cb16',
		'nikolaskam@gmail.com foo',
		'absdefghijklmn[IPv6:2001:db8::2]',
		'https://abc.xyz',
];

test('Exact onion links', t => {
	for (const x of fixtures) {
		t.true(m({exact: true}).test(x));
	}
});

test('Non-exact onion links', t => {
	for (const x of fixtures) {
		t.is((m().exec(`foo ${x} bar`) || [])[0], x);
	}
});

test('Non-onion links', t => {
	for (const x of fixturesNot) {
		t.false(m({exact: true}).test(x));
	}
});