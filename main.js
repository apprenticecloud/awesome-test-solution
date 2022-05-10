// QUESTION 1

let tax_rate;
const age = 20;

// QUESTION 2
const myArray = [4, -2, 6, 9, 1, 12, 6, 2, 10];
let sum = 0;
// loops
for(let i = 0; i < myArray.length; i++) {
    if(myArray[i] > 5) sum += myArray[i]; // guard clauses
}
console.log(sum); // 43

// for...of loop
let sum1 = 0;
for(let element of myArray) {
    if(element > 5) sum1 += a;
}

console.log("SUM 1 => ", sum1); // 43

// using HIGH ORDER ARRAY METHODS
// .filter()
// .reduce()

const sum2 = myArray.filter(element => element > 5).reduce((accumulator, value) => accumulator + value, 0);

console.log("SUM 2 => ", sum2); //43

// QUESTION 3
const information = {
    name: "John Doe",
    age: 35,
    occupation: "Software Engineer",
    interest: {
        outdoor: [ { "hiking": ["Mt. Kenya", "Mt. Everest", "Menengai Crater"] } ]
    }
}

// .(dot) operator and []
console.log(information.interest.outdoor[0].hiking[2]);

// destructuring
/**
 * why destructuring? It gives us a single a point of truth
 */

 const { interest: { outdoor } } = information;

 console.log(outdoor[0].hiking[2]);

//  QUESTION 4
// HELPER FUNCTION BELOW
const processor = param1 => Array.from(param1).sort().join("");

// ANAGRAM ES6 FUNCTION BELOW
const anagramFunc = (word1, word2) => {
    /* Checks words passed form an anagram */
    if (processor(word1) === processor(word2)) return true;  
    return false;
}

console.log(anagramFunc("cinema", "iceman")); // expected output: true
console.log(anagramFunc("jupiter", "jubiter")); // expected output: false

// QUESTION 5

// HELPER FUNCTION BELOW
const processor1 = param1 => param1.split('').reverse().join('');

// PALINDROME FUNCTION
const palindrome = word => word === processor1(word) ? true : false;

console.log(palindrome("racecar")); // expected output: true
console.log(palindrome("nurse run")); // expected output: false

// QUESTION 6
const getGrade = marks => {
    if(marks > 0 && marks <= 5) return "F";
    if(marks <= 10) return "E";
    if(marks <= 15) return "D";
    if(marks <= 20) return "C";
    if(marks <= 25) return "B";
    if(marks <= 30) return "A";
}

console.log(getGrade(15)); // expected output: B

// QUESTION 7
class Polygon {
    constructor(sides) {
        this.sides = sides;
    }

    perimeter() {
        return this.sides.reduce((acc, val) => acc + val, 0);
    }
}

// QUESTION 8
const x = new Polygon([45, 56, 67]);

console.log(x.perimeter()); // 168

// QUESTION 9
const checkFizzBuzz = value => {
    if(value % 3 === 0 && value % 5 === 0) return 'fizzbuzz';
    if(value % 3 === 0) return 'fizz';
    if(value % 5 === 0) return 'buzz';
    return value;
}

for(let i = 0; i <= 21; i++) {
    // write your code here...
    console.log(checkFizzBuzz(i));
}


// QUESTION 10

// SOLUTION 1: THE REASON IT IS NOT POSSIBLE TO DO IT N THIS METHOD IS BECAUSE YOU CANNOT CHANGE INDEX AS IN LINE 129 OF THIS CODE.

// const baseBallPointer = values => {
//     values.forEach((element, index) => {
//         console.log("index => ", index);
//         if(typeof element === 'number') values.splice(index, 1, element);
//         if(element === 'D') values.splice(index, 1, values[index - 1] * 2);
//         if(element === '+') values.splice(index, 1, values[index - 2] + values[index - 1]);
//         if(element === 'C') {
//             values.splice(index - 1, 2);
//             index = index - 2;
//         }
//         console.log(element);
//         console.log(values);
//     });
//     console.log("VALUES => ", values);
//     return values.reduce((acc, val) => acc + val, 0);
// }

// Input: [5, 2,"C","D","+"]
// STEP 1: [5, 2]
// STEP 2: [5]
// STEP 3: [5, 10]
// STEP 4: [5, 10, 15] = 30

// Input: [5, -2, 4, "C", 7, "D", 9, "+", "+"]
// STEP 1: [5]
// STEP 2: [5, -2]
// STEP 3: [5, -2, 4]
// STEP 4: [5, -2]
// STEP 5: [5, -2, 7]
// STEP 6: [5, -2, 7, 14]
// STEP 7: [5, -2, 7, 14, 9]
// STEP 8: [5, -2, 7, 14, 9, 23]
// STEP 9: [5, -2, 7, 14, 9, 23, 32] // = 88

// SOLUTION 2: THIS IS THE CORRECT METHOD BECAUSE YOU CAN CHANGE INDEXES USING THE FOR LOOP.

const baseBallPointer = values => {
    for(let i = 0; i< values.length; i++) {
        if(typeof values[i] === 'number') values.splice(i, 1, values[i]);
        if(values[i] === 'D') values.splice(i, 1, values[i - 1] * 2);
        if(values[i] === '+') values.splice(i, 1, values[i - 2] + values[i - 1]);
        if(values[i] === 'C') {
            i -= 1;
            values.splice(i, 2);
            i -= 1;
        }
    }
    return "SUM => " + values.reduce((acc, val) => acc + val, 0);
}

// console.log(baseBallPointer([5, "C", 4, 2, "D", 5, "C", "+"]));
// console.log(baseBallPointer([5, -2, 4, "C", 7, "D", 9, "+", "+"]));