// claude exercises

// =====
// EXERCISE 1: remove whitespace and make lowercase
// =====
const messy = '   hello WORLD   ';
const cleaned = messy.trim().toLowerCase();
console.log(cleaned);

// =====
// EXERCISE 2: filter even numbers, double them, then sum the result
// =====
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// the imperative way
let result = 0;
numbers.forEach((number) => {
  if (number % 2 == 0) {
    result += number * 2;
  }
});
console.log(result);

// fp way
let result2 = numbers
  .filter((num) => num % 2 === 0)
  .map((num) => num * 2)
  .reduce((sum, num) => sum + num, 0); // 0 being the initial value of sum
console.log(result2);

// =====
// EXERCISE 3: convert to array of words, capitalize each, join with dashes
// =====
const sentence = 'the quick brown fox jumps over the lazy dog';
const result3 = sentence
  .split(' ')
  .map((word) => word[0].toUpperCase() + word.slice(1, word.length)) // dont even have to specify the last index here
  .join('-');
console.log(result3);

// =====
// EXERCISE 4: split into array, trim each, lowercase each, remove duplicates
// =====
const emails =
  '  user1@email.com, USER2@EMAIL.COM  ,user3@email.com     ,  uSeR1@email.com  ';
const result4 = emails.split(',');
const unique = new Set();
result4.forEach((val) => {
  unique.add(val.trim().toLowerCase());
});
console.log(unique);

// =====
// EXERCISE 5: split into array, trim each, lowercase each, remove duplicates
// =====
const products = [
  { name: 'laptop', price: 1000 },
  { name: 'mouse', price: 25 },
  { name: 'keyboard', price: 75 },
  { name: 'monitor', price: 300 },
];
let expensiveProducts = '';
products.forEach((product, i) => {
  if (product.price > 50)
    expensiveProducts +=
      i === 0 ? product.name.toUpperCase() : ' | ' + product.name.toUpperCase(); // i dont like this
});
console.log(expensiveProducts);

// this is what claude suggested, way cleaner
const result6 = products
  .filter((product) => product.price > 50)
  .map((product) => product.name.toUpperCase())
  .join(' | ');
console.log(result6);

// =====
// EXERCISE 6: parse into an object like {page: "1", sort: "name", filter: "active"}
// =====
const url = 'page=1&sort=name&filter=active';
