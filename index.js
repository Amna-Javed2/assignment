"use strict";
// Question 1
// Write a script to log "Hello, World!" to the console.
console.log('Hello World');
// Question 2
// Create a variable temperature and assign it a value. Then log "It's cold!" if the temperature is below 20 degrees Celsius.
let temperature = 18;
if (temperature < 20) {
    console.log("It's cold");
}
else {
    console.log("It's hot!");
}
// Question 3
// Use arithmetic operators to solve the problem: If you have 10 apples and you give away 3, how many do you have left? Log the result.
let apples = 10;
let applesGivenAway = 3;
let applesLeft = apples - applesGivenAway;
console.log(applesLeft);
// Question 4
// Declare two variables, firstName and lastName, then create a third variable fullName that combines them. Log the result.
let F_Name = 'Amna';
let L_Name = 'Javed';
let Full_Name = F_Name + "" + L_Name;
let Full_Name1 = `Full Name: ${F_Name} ${L_Name}`;
console.log(Full_Name);
console.log(Full_Name1);
// Question 5
// Write a TypeScript code that uses a comparison operator to check if the number 5 is greater than 3. Log "Yes" if true, otherwise log "No".
if (5 > 3) {
    console.log('Yes');
}
else {
    console.log('No');
}
// Question 6
// Create a function calculateArea that takes the radius of a circle as an input and returns the area of the circle.
function calculateArea(r) {
    return (3.14) * r ** 2;
}
const area = calculateArea(4);
console.log(area);
// Question 7
// Write a loop that logs numbers from 1 to 50. For multiples of 3, log "Fizz" instead of the number, and for multiples of 5, log "Buzz".
for (let i = 1; i <= 50; i++) {
    if (i % 3 == 0) {
        console.log("Fizz");
    }
    else if (i % 5 == 0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}
// Question 8
// Define an array temperatures with at least five different temperatures (numbers). Write a script to find and log the highest temperature.
let maxTemp = Math.max(21, 23, 33, 32, 16);
console.log(maxTemp);
// Question 9
// Create a script that prompts the user to enter their age and then logs whether they are a minor (under 18) or an adult.
function checkAge(age) {
    if (age < 18) {
        console.log('minor');
    }
    else {
        console.log('adult');
    }
}
// Question 10
// Write a function that takes an array of numbers and returns the count of positive numbers in the array.
let number = [2, -4, 7, -3, 10, -33];
let checkPosNum = (number) => {
    let count = 0;
    for (let i = 0; i < number.length; i++) {
        if (number[i] > 0) {
            count = count + 1;
            // count++;
        }
    }
    return count;
};
console.log(checkPosNum(number));
// second method
// function countPositiveNumbers(numbers:number[]){
//     let count = 0;
//     for (let i = 0; i < numbers.length; i++) {
//       if (numbers[i] > 0) {
//         count = count + 1;
//         count++;
//       }
//     }
//     return count;
// }
// console.log(countPositiveNumbers(number));
// Question 11
// Write a function that takes an array of words and returns a new array containing only the words that start with the letter 'a'.
let words = ['Amna', 'Mirha', 'Abeera', 'Noor'];
function letterA(words) {
    return words.filter(words => words.startsWith('A'));
}
let lettersA = letterA(words);
console.log(lettersA);
// Question 12
// Create a script that logs the second to last element of an array named fruits.
let fruits = ['mango', 'orange', 'grapes'];
function secondtolast() {
    if (fruits.length >= 2) {
        console.log(fruits[fruits.length - 2]);
    }
}
secondtolast();
// Question 13
// Develop a function that takes an array of numbers and returns a new array with each number squared.
let num = [1, 2, 3, 4, 5];
function square(numbers) {
    return numbers.map((num) => num ** 2); // num ** 2     // num * num
}
const square1 = square(num);
console.log("Square method:", square1);
// Question 14
// Write a JavaScript function that accepts an array and reverses its elements without using the .reverse() method. Log the result.
num = [1, 2, 3, 4, 5];
function reverseArray(array) {
    const reversed = [];
    for (let i = array.length - 1; i >= 0; i--) {
        reversed.push(array[i]);
    }
    return reversed;
}
const newReverse = reverseArray(num);
console.log("Reverse method", newReverse);
// Question 15
// Given an array scores [10, 5, 20, 20, 4, 5, 2, 25, 1], write a function that logs the number of times the score exceeded the
//  maximum score and the number of times it fell below the minimum score.
const scoresArray = [10, 5, 20, 20, 4, 5, 2, 25, 1];
function analyzeScores(scores) {
    let maxScore = scores[0];
    let minScore = scores[0];
    let exceededCount = 0;
    let belowCount = 0;
    for (const score of scores) {
        if (score > maxScore) {
            maxScore = score;
            exceededCount++;
        }
        if (score < minScore) {
            minScore = score;
            belowCount++;
        }
    }
    console.log(`Exceeded maximum score (${maxScore}): ${exceededCount} times`);
    console.log(`Fell below minimum score (${minScore}): ${belowCount} times`);
}
analyzeScores(scoresArray);
// Question 16
// Create a function that removes all falsey values from an array. Falsey values include false, null, 0, "", undefined, and NaN.
const originalArray = [false, null, 0, "", undefined, NaN, "hello", 42];
function removeFalseValue(array) {
    return array.filter(Boolean);
}
const filteredArray = removeFalseValue(originalArray);
console.log("Filtered array:", filteredArray);
// Question 17
// Write a script that concatenates two arrays [1, 2, 3] and [4, 5, 6] into a single array.
const arr1 = [10, 20, 30];
const arr2 = [40, 50, 60];
const concatenate1 = arr1.concat(arr2);
console.log(concatenate1);
const concatenate2 = [...arr1, ...arr2];
console.log(concatenate2);
// Question 18
// Develop a function called sumOfElements that calculates the sum of all elements in an array
//  that are either even or odd, based on a parameter.
function sumOfElements(arr, isEven) {
    return arr.reduce((sum, current) => {
        if ((current % 2 === 0) === isEven) {
            return sum + current;
        }
        return sum;
    }, 0);
}
const array = [1, 2, 3, 4, 5, 6];
const sumOfEven = sumOfElements(array, true);
const sumOfOdd = sumOfElements(array, false);
console.log(`Sum of even elements: ${sumOfEven}`);
console.log(`Sum of odd elements: ${sumOfOdd}`);
// Question 19
// Create a function that checks whether an element exists in an array. If it exists, return the index, otherwise return -1.
function findElementIndex(arr, element) {
    const index = arr.indexOf(element);
    return index !== -1 ? index : -1;
}
const myArray = [10, 20, 30, 40, 50];
const searchElement = 5; // koi b number likhe or is se pta chaly ga ke ye number apki array mei hai ya nhi
const resultIndex = findElementIndex(myArray, searchElement);
if (resultIndex !== -1) {
    console.log(`Element ${searchElement} found at index ${resultIndex}.`);
}
else {
    console.log(`Element ${searchElement} not found in the array.`);
}
// Question 20
// Write a function to find and return the smallest number in an array of integers.
const Array1 = [10, 5, 20, 4, 15];
function findSmallestNumber(arr) {
    return Math.min(...arr);
}
const smallestNumber = findSmallestNumber(Array1);
console.log(`The smallest number in the array is: ${smallestNumber}`);
// Question 21
// Write a function calculateProduct that takes an array of numbers and returns the product of all elements.
const Array2 = [2, 3, 4, 5];
function calculateProduct(numbers) {
    return numbers.reduce((product, current) => product * current, 1);
}
const product = calculateProduct(Array2);
console.log(`Product of elements: ${product}`);
// Question 22
// Develop a function filterByLength that takes an array of strings and a number n. The function should
//  return an array containing only the strings that are longer than n characters.
const myStrings = ["banana", "cherry", "date", "fig", "apple"];
const minLength = 4;
function filterByLength(strings, n) {
    return strings.filter((str) => str.length > n);
}
const filteredStrings = filterByLength(myStrings, minLength);
console.log("Filtered strings:", filteredStrings);
// Question 23
// Create a function findDuplicates that finds and logs all duplicates in an array.
function findDuplicates(arr) {
    const sortedArr = arr.slice().sort();
    const duplicates = [];
    for (let i = 0; i < sortedArr.length - 1; i++) {
        if (sortedArr[i + 1] === sortedArr[i]) {
            duplicates.push(sortedArr[i]);
        }
    }
    return duplicates;
}
const Array3 = [1, 3, 8, 6, 5, 9, 4, 2, 3, 1, 8, 7, 7];
const duplicateValues = findDuplicates(Array3);
console.log(`The duplicates in array [${Array3}] are: ${duplicateValues}`);
// Qestion 24
// Write a function incrementAll that takes an array of integers and increments each element by one.
function incrementAll(arr) {
    return arr.map((element) => element + 1);
}
const Array4 = [1, 2, 3, 4];
console.log("Simple Array:", Array4);
const incrementedArray = incrementAll(Array4);
console.log("Incremented array:", incrementedArray);
// Question 25
// Develop a function countOccurrences that counts how many times a specific element appears in an array.
function countOccurrences(arr, target) {
    return arr.reduce((count, element) => (element === target ? count + 1 : count), 0);
}
const Array5 = [2, 5, 7, 8, 7, 7, 2, 5];
const targetElement = 7; // yaha jo number likhen ge vo array mei jitni bar b ho ga vo result a jaye ga.
const occurrences = countOccurrences(Array5, targetElement);
console.log(`The element ${targetElement} appears ${occurrences} times in the array.`);
// Question 26
// Create a function isSorted that checks if an array is sorted in ascending order.
const isSorted = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            return false;
        }
    }
    return true;
};
const Array6 = [1, 2, 3, 5, 8]; // true
// const Array6 = [1, 2, 3, 10, 8];  // false   
console.log(`Is myArray sorted in ascending order? ${isSorted(Array6)}`);
function formatNames(namesList) {
    const formattedNames = namesList.map((item, index) => {
        if (index === namesList.length - 1) {
            return item.first + ' ' + item.last;
        }
        else if (index === namesList.length - 2) {
            return item.first + ' and ' + item.last;
        }
        else {
            return item.first + ',';
        }
    });
    return formattedNames.join(' ');
}
const names = [
    { first: 'Amna', last: 'Javed' },
    { first: 'Abeera', last: 'Jannat' },
    { first: 'Mirha', last: 'Fatima' },
];
const formattedString = formatNames(names);
console.log('Formatted names:', formattedString);
// Question 28
// Develop a function that converts an array of Fahrenheit temperatures to Celsius and logs the new temperatures.
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}
const fahrenheitTemperatures = [77, 68, 90, 97];
for (const fahrenheit of fahrenheitTemperatures) {
    const celsius = fahrenheitToCelsius(fahrenheit);
    console.log(`${fahrenheit}°F is approximately equal to ${celsius.toFixed(2)}°C.`);
}
// Question 29
// Write a function minMaxAverage that takes an array of numbers and returns an object with properties for
//  the minimum, maximum, and average of those numbers.
function minMaxAverage(arr) {
    if (arr.length === 0) {
        throw new Error("Array must not be empty.");
    }
    const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const average = sum / arr.length;
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    return { min, max, average };
}
const numbers = [10, 4, 7, 3];
const result = minMaxAverage(numbers);
console.log("Minimum:", result.min);
console.log("Maximum:", result.max);
console.log("Average:", result.average.toFixed(2));
// Question 30
// Create a function swapElements that swaps two specified indices in an array.
function swapElements(arr, index1, index2) {
    if (index1 < 0 || index1 >= arr.length || index2 < 0 || index2 >= arr.length) {
        throw new Error("Invalid indices. Both indices must be within the array bounds.");
    }
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
}
const Array7 = [10, 20, 30, 40];
swapElements(Array7, 1, 3);
console.log("Swapped array:", Array7);
// Question 31
function countOccurrences1(search, char) {
    const regex = new RegExp(char, 'g');
    const matches = search.match(regex) || [];
    return matches.length;
}
const inputString = 'foo x bar x baz x';
const characterToCount = 'x';
const result1 = countOccurrences1(inputString, characterToCount);
console.log(`The character "${characterToCount}" appears ${result1} times in the string.`);
const todoList = [
    { task: 'Buy groceries', completed: false },
    { task: 'Finish project report', completed: true },
    { task: 'Exercise', completed: false },
];
function logIncompleteTasks(tasks) {
    const incompleteTasks = tasks.filter(task => !task.completed);
    if (incompleteTasks.length === 0) {
        console.log('All tasks are completed!');
    }
    else {
        console.log('Incomplete tasks:');
        incompleteTasks.forEach(task => console.log(task.task));
    }
}
logIncompleteTasks(todoList);
// Question 33
// Write a function that takes an array of integers and sorts them from smallest to largest.
function sortIntegers(arr) {
    return arr.sort((a, b) => a - b);
}
const unsortedArray = [4, 2, 7, 1, 9, 5];
const sortedArray = sortIntegers(unsortedArray);
console.log("Sorted Numbers:", sortedArray);
// Question 34
// Develop a TypeScript program that logs every element of an array in reverse order without using the .reverse() method.
function reverse(arr) {
    const reversedArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArr.push(arr[i]);
    }
    return reversedArr;
}
// Example usage
const original = [1, 2, 3, 4, 5];
const reversedArray = reverse(original);
console.log("Reversed array:", reversedArray);
