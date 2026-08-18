// typetjek.js
console.log(typeof 123 === 'number'); // => true
console.log(typeof 123n === 'bigint'); // => true
console.log(typeof 'abc' === 'string'); // => true
console.log(typeof true === 'boolean'); // => true
console.log(typeof undefined === 'undefined'); // => true

console.log(typeof null === 'null'); // => false
console.log(typeof null); // => object
console.log(null === null) // => true

console.log(undefined === null) // => false
console.log(undefined == null) // => true