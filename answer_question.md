Question1:
let greeting;
greetign = {};
console.log(greetign);
A: {}
B: ReferenceError: greetign is not defined
C: undefined

Answer: B;
Description: Declares a variable named greeting using the let keyword.it does not assign any value to this variable at this point.
Attempts to assign an empty object {} to a variable named greetign. 


Question2:
function sum(a, b) {
  return a + b;
}

sum(1, "2");
A: NaN
B: TypeError
C: "12"
D: 3

Answer: C;
Description:JavaScript will perform type coercion and convert the number 1 to a string to match the data type of b, which is already a string. Then, it will concatenate these two strings together, resulting in the string "12".

Question3:
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
A: ['🍕', '🍫', '🥑', '🍔']
B: ['🍝', '🍫', '🥑', '🍔']
C: ['🍝', '🍕', '🍫', '🥑', '🍔']
D: ReferenceError

Answer: A;
Description: The food array itself is not modified by changing the info.favoriteFood property. log the food array, it still contains its original elements, resulting in option A: ['🍕', '🍫', '🥑', '🍔'].


Question4:
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
A: Hi there,
B: Hi there, undefined
C: Hi there, null
D: ReferenceError

Answer: B
Describe: I have a function sayHi that takes one parameter name and returns a string with a greeting, including the value of name.
When i call sayHi() without passing any argument, the name parameter inside the function is not provided with a value explicitly. In JavaScript, when a parameter is not provided with a value, it defaults to undefined.


Question5:
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
A: 1
B: 2
C: 3
D: 4

Answer: B;
Description: I start with a variable count initialized to 0.I have an array nums containing [0, 1, 2, 3].You use the forEach method to iterate over each element of the nums array and execute a callback function for each element.
In the callback function, there is an if statement that checks if the num is truthy (not equal to 0 in JavaScript, which is considered falsy).For the values in the array:
0 is falsy, so it does not increment count.1, 2, and 3 are truthy, so they each increment count by 1.After the loop is finished, count will have been incremented for each truthy value, which means it will be 2.
