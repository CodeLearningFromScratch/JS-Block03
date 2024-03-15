




console.log('------------------------------- Block 03 start -------------------')

// Ex 1
let i = 1;
const firstLoop = () => {
 for ( i; i <= 10; i++) { 
     console.log(i)
 }
   return i
}
console.log('Ex 1:', firstLoop())

console.log('------------------------------------------------------------------')

// Ex 2
let ii = 11;
const firstLoopReverse = () => {
 for ( ii; ii >= 1; ii--) {
     console.log(ii)
  }
   return ii
}
console.log('Ex 2:', firstLoopReverse())

console.log('------------------------------------------------------------------')

// Ex 3       
function isEven(arr) {
  let count = 0;

  for (let num of arr) {
      if (typeof num === 'number' && num % 2 === 0) {
          count++;
      }
  }

  return count;
}

console.log('Ex 3:', isEven([2, 4, 8, 7])); 
console.log('Ex 3:', isEven([1, 9, 66, "banana"])); 

console.log('------------------------------------------------------------------')

// Ex 4   
let arr = ['one', 'two', 'three', 'four'];

function looper(argument) {
    let count = 0;
    argument.forEach(function (item, index) {
        count = index + 1;
    });
    return count;
}

console.log('Ex 4:', looper(arr)); 
console.log('Ex 4:', looper([2, 4, 8, 7])); 

console.log('------------------------------------------------------------------')

// Ex 5
let anyArr = ['one', 5, 'two', 6, 'three', true, 'four'];

function isString(arrAy) {
    let empty = [];

    arrAy.forEach(function (item) {
        if (typeof item === 'string') {
            empty.push(item);
        }
    });

    return empty;
}

console.log('Ex 5:', isString([3, 55, 66, "hello"])); // ["hello"] 
console.log('Ex 5:', isString([3, 55, 66, "hello", "beer", 12, {}, [], () => { }, "[]"])); // ["hello", "beer", "[]"] 
console.log('Ex 5:', isString(anyArr)); // ["one", "two", "three", "four"] 

console.log('------------------------------------------------------------------')

// Ex 6
const sum = (argument) => {

 let total = 0;

 for (let i = 0; i < argument.length; i++) {
   total += argument[i]
 }
 return total
} 
console.log('Ex 6:', sum([10, 10, 10])) // 30
console.log('Ex 6:', sum([5, 20, 10])) // 35
console.log('Ex 6:', sum([35, 20, 10])) // 65

console.log('------------------------------------------------------------------')

// Ex 7
const multy = (argument) => {
 
 let total = 1;

 for (let i = 0; i < argument.length; i++) {
   total *= argument[i]
 }
 return total
}
console.log('Ex 7:', multy([10, 10, 10])) // 1000
console.log('Ex 7:', multy([5, 4, 2])) // 40
console.log('Ex 7:', multy([15, 4, 2])) // 120

console.log('------------------------------------------------------------------')

// Ex 8
const timesTwo = (argument) => {

 let empty = [];

 for (let i = 0; i < argument.length; i++) {
   empty.push(argument[i] * 2)
 }
 return empty
} 
console.log('Ex 8:', timesTwo([10, 10, 10])) // [20, 20, 20]  
console.log('Ex 8:', timesTwo([5, 4, 2])) // [5, 4, 2]  
console.log('Ex 8:', timesTwo([15, 4, 2])) // [30, 8, 4] 

console.log('------------------------------------------------------------------')

// Ex 9 
function twoArrays(arrAy1, arrAy2) {
  let count = 0;

  for (let i = 0; i < arrAy1.length; i++) {
      if (arrAy1[i] === arrAy2[i]) {
          count++;
      }
  }

  return count;
}

console.log('Ex 9:', twoArrays([1, 5, 80], [10, 5, 80])); 
console.log('Ex 9:', twoArrays([10, 10, 10], [10, 10, 5])); 
console.log('Ex 9:', twoArrays([3, 5], [1, 4, 5])); 
console.log('Ex 9:', twoArrays([3, 5], ['3', '5'])); 

console.log('------------------------------------------------------------------')

// Ex 10
function two_Arrays(arr_1, arr_2) {
  let count = 0;

  arr_1.forEach(function (item, index) {
      if (item == arr_2[index]) {
          count++;
      }
  });

  return count;
}

console.log('Ex 10:', two_Arrays([1, 5, 80], [10, 5, 80])); // 2 
console.log('Ex 10:', two_Arrays([1, 5, '80'], [10, 5, 80])); // 2 
console.log('Ex 10:', two_Arrays([3, 5], [1, 4, 5])); // 0 
console.log('Ex 10:', two_Arrays([3, 5], ['3', '5'])); // 2 

console.log('------------------------------------------------------------------')

// Ex 11
function lowerCaseLetters(long_string) {
  let newString = [];

  for (let i = 0; i < long_string.length; i++) {
      if(long_string[i] === long_string[i].toUpperCase() && isNaN(long_string[i]) ){
          newString.push(' ');
      }
      if (isNaN(long_string[i]) && long_string[i] !== ' ') {
          newString.push(long_string[i].toLowerCase());
      }
  }

  return newString.join('').replace(/\d+/g, '').trim();
}

console.log('Ex 11:', lowerCaseLetters("An2323t2323one32llo123455Likes567323Play323ing567243G2323a3mes345"));

console.log('------------------------------------------------------------------')

// Ex 12
function reverser(reverse_string) {
  let newReverse = [];
  for (let i = reverse_string.length - 1; i >= 0; i--) {
      newReverse.push(reverse_string[i]);
  }
  return newReverse.join('');
}

console.log('Ex 12:', reverser("reeb dloc fo tnip ecin a htiw dna oyam htiw seotatop deirf peed evol I"));

console.log('------------------------------------------------------------------')

// Ex 13
function shortener(short) {
  let names = short.split(' '); 
  let firstName = names[0]; 
  let lastName = names[1];
  let shortenedLastName = lastName.charAt(0).toUpperCase() + '.';

  return `${firstName} ${shortenedLastName}`;
}

console.log('Ex 13:', shortener("Jessica flower"));
console.log('Ex 13:', shortener("Mike wood")); 

console.log('------------------------------------------------------------------')

// Ex 14
function budgetTracker(budget) {
  let totalYen = 0;
  for (let i = 0; i < budget.length; i++) {
      totalYen += parseInt(budget[i]);
  }
  let averageYen = totalYen / budget.length; 
  let averageUsd = Math.ceil(averageYen * 0.0089); 
  return `${averageUsd} usd`;
}

var expenses = [
  '10003', 
  '46733', 
  '45833', 
  '3534',  
  '57354',
  '45334', 
  '34856' 
];

console.log('Ex 14:', budgetTracker(expenses))  // 310 usd 

console.log('------------------------------------------------------------------')

// Ex 15
let fruits = ['banana', 'kiwi', 'orange', 'apple', 'watermelon', 'pear'];

function longestString(food, minLength) {
    for (let i = food.length - 1; i >= 0; i--) {
        if (food[i].length > minLength) {
            return food[i];
        }
    }
    return null;
}
console.log('Ex 15:', longestString(fruits, 5));

console.log('------------------------------- Block 03 start -------------------')


















