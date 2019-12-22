import {expectType} from 'tsd';
import onionRegex = require('.');

expectType<RegExp>(onionRegex());
expectType<RegExp>(onionRegex({exact: true}));
expectType<RegExp>(onionRegex.v2());
expectType<RegExp>(onionRegex.v2({exact: false}));
expectType<RegExp>(onionRegex.v3());
expectType<RegExp>(onionRegex.v3({exact: true}));