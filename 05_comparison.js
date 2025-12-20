/*
  JavaScript Comparison Notes

  Key operators:
  - ==  : loose equality (performs type coercion)
  - === : strict equality (no type coercion)
  - !=  : loose inequality
  - !== : strict inequality
  - >, <, >=, <= : relational comparisons (can coerce values)

  Rules & gotchas:
  1) Prefer `===` and `!==` to avoid type-coercion surprises.
	Example:
	  "2" == 2    // true  (coerces string to number)
	  "2" === 2   // false (different types)

  2) `==` has special rules for `null` and `undefined`:
	  null == undefined   // true
	  null == 0           // false
	  But relational comparisons coerce differently:
	  null > 0            // false
	  null >= 0           // true   (because null -> 0 for relational >=)

  3) `undefined` in comparisons:
	  undefined == 0     // false
	  undefined > 0      // false
	  undefined < 0      // false
	Many relational comparisons with `undefined` produce `false`.

  4) NaN is never equal to itself:
	  NaN == NaN        // false
	  NaN === NaN       // false
	Use `Number.isNaN(value)` to test for NaN, or `Object.is(NaN, NaN)`.

  5) Objects and arrays compare by reference, not by structure:
	  [] == false       // true  (loose equality: [] -> '' -> 0)
	  [] === false      // false
	  [1,2] == "1,2"  // true (array coerces to string)
	  {} == {}          // false (different object references)

  6) `Object.is` differences vs `===`:
	  Object.is(+0, -0)    // false
	  +0 === -0             // true
	  Object.is(NaN, NaN)   // true

  7) String comparisons are lexicographic (based on UTF-16 code units):
	  "b" > "a"        // true
	  "2" > "10"       // true ("2" > "1" lexicographically)

  Best practices summary:
  - Use `===` / `!==` by default.
  - Avoid relying on `==` coercion; if needed, convert types explicitly.
  - Use `Object.is` for exact sameness when you care about NaN or ±0.
  - Be cautious when comparing objects/arrays — compare properties or use deep equality utilities.

  Quick examples (uncomment to run):
*/

// Basic relational
console.log(2 > 1);        // true
console.log(2 >= 1);       // true
console.log(2 < 1);        // false
console.log(2 == 1);       // false
console.log(2 != 1);       // true

// Type coercion differences
console.log("2" > 1);    // true  ("2" -> 2)
console.log("02" > 1);   // true  ("02" -> 2)

// null vs undefined
console.log(null > 0);     // false
console.log(null == 0);    // false
console.log(null >= 0);    // true

console.log(undefined == 0); // false
console.log(undefined > 0);  // false
console.log(undefined < 0);  // false

// Strict equality
console.log("2" === 2);  // false

// NaN checks
console.log(NaN == NaN);         // false
console.log(Number.isNaN(NaN));  // true

// Object.is examples
console.log(Object.is(NaN, NaN)); // true
console.log(Object.is(+0, -0));   // false

// Object/array comparisons
console.log([] == false);     // true
// console.log([] === false);    // false
console.log([1,2] == "1,2"); // true
console.log({} == {});        // false

// String lexicographic
console.log("2" > "10");  // true
