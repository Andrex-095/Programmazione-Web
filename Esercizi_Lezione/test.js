const _ = require('lodash');

let res = _.partition([1, 2, 3, 4], n => n % 2);

console.log(res);