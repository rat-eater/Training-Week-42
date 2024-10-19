/*
    Hi.
    This is a set of practice exercises.
    The purpose is to focus on a few things at a time.
    You do this by writing your answer after a task is given (see the example).

    DO NOT change any code that is provided unless the task specifically says so.
*/

/* -----------------------------------------------------------------------------
    Task: Example
    Write the code to print all the names in the list, one name per line
*/
console.log("Task: Example");
const people = ["Tony", "Christian", "Håkon"]

for (let index = 0; index < people.length; index++) {
    let person = people[index];
    console.log(person);
}

/* -----------------------------------------------------------------------------
    Task: A
    Create a function that returns an array of length m-n, 
    n is the min value. 
    m is the max value. 
    if n = 5 and m is 10 the returned array should be [5,6,7,8,9]
    Use loops and arrays to achieve the goal. 
*/
console.log("Task: A");

function createArray(n, m) {
    let result = [];
    for (let i = n; i < m; i++) {
        result.push(i);
    }
    return result;
}

//Testing
console.log(createArray(5, 10)); 


/* -----------------------------------------------------------------------------
    Task: B
    Create two arrays using your function from task a.
    first array n = 5, m = 11
    second array n = 8, m = 23
    
    Create a function that combines the two arrays into one, but no duplicate values. 
    Use for loops
*/
console.log("Task: B");

let array1 = createArray(5, 11);
let array2 = createArray(8, 23);

function combineArrays(arr1, arr2) {
    let combined = [...arr1]; 
    for (let i = 0; i < arr2.length; i++) {
        if (!combined.includes(arr2[i])) { 
            combined.push(arr2[i]);
        }
    }
    return combined;
}

//Testing
console.log(combineArrays(array1, array2)); 


/* -----------------------------------------------------------------------------
    Task: C
    Following you will find an alphabet, an encrypted text, and a shift value. 
    The message is encrypted using a Caesar cipher.
    Create a function that decrypts and returns the message.
*/
console.log("Task: C");

const ALPHABET = "abcdefghijklmnopqrstuvwxyz"; 
const message = "ckrr jutk"; 
let shift = 6; 

function caesarCipherDecrypt(message, alphabet, shift) {
    let decryptedMessage = "";
    for (let i = 0; i < message.length; i++) {
        let char = message[i];
        if (char === " ") {
            decryptedMessage += " "; 
        } else {
            let index = alphabet.indexOf(char);
            let newIndex = (index - shift + alphabet.length) % alphabet.length; 
            decryptedMessage += alphabet[newIndex];
        }
    }
    return decryptedMessage;
}

//Testing
console.log(caesarCipherDecrypt(message, ALPHABET, shift)); 


/* -----------------------------------------------------------------------------
    Task: D
    You are given a list of numbers.
    Write a function that finds two numbers in the list that sum to the target.
*/
console.log("Task: D");

const numbers = [1, 23, 14, 56, 42, 33, 0, 3]; 
const target = 36; 

function findTwoNumbers(list, targetSum) {
    for (let i = 0; i < list.length; i++) {
        for (let j = i + 1; j < list.length; j++) {
            if (list[i] + list[j] === targetSum) {
                return [list[i], list[j]];
            }
        }
    }
    return null; 
}

//Testing
console.log(findTwoNumbers(numbers, target)); 


/* -----------------------------------------------------------------------------
    Task: E
    Create a function that takes a number as input and returns the number of digits in that number. 
*/
console.log("Task: E");

function countDigits(num) {
    return num.toString().length;
}


console.log(countDigits(123));    
console.log(countDigits(2));      
console.log(countDigits(42693));  
