/**
 * Assignment vs comparison
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#Relational_operators
 */

let a = 6;
let b = 5;

console.log(`let a: ${a} (${typeof a})`);
console.log(`let b: ${b} (${typeof b})`);

if (a > b) {
  console.log(`Match! a is larger than b.`);
} else {
  console.error(`No match:a is not larger than b.`);
}
