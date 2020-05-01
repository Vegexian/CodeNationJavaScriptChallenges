                                                                        // IfElse / Switch

                            // Challenge 1

// Create a variable called password. Check how many letters are in the password, if there are less than 8 log to the console that the password is too short. 
// Otherwise log the password to the console.

// let password = "Hunter";

// if (password.length < 8) {
//     console.log("Password too short");
// }
// else {
//     console.log(password);
// }

                        // Challenge 2

// Create a variable called num. Check if the variable is divisible by 3 or 5. 
// If it is log “This number is divisible by 3 or 5” to the console. Otherwise log “This number is not divisible by 3 or 5”.

// let num = 14;

// if (num % 3 == 0 || num % 5 == 0) {
// console.log ("This number is divisble by 3 or 5");
// } 
// else {
//     console.log ("This number is not divisible by 3 or 5");
// }

                         // Challenge 3

// Create a variable called num. If num is divisible by 3 log “fizz” to the console, if it’s divisible by 5 log “buzz” to the console.
// If it’s divisible by both 3 and 5 log “fizz buzz” to the console. Otherwise log num to the console.

// let num = 12;

// switch(true) {
//     case (num % 3 == 0 && num % 5 == 0):
//         console.log("fizz buzz");
//         break;
//     case(num % 3 == 0):
//     console.log("fizz");
//     break;
//     case (num % 5 == 0):
//         console.log("buzz");
//         break;
//     default: {
//         console.log(num);
//     }
// }

                             // Challenge 4

//Create a variable called num. Check if the number is a palindrome (looks the same forward as it does backwards e.g. 1001 or 20202).

// Self study and practical use of the split(''), reverse() and join('') functions to find a palindrome. Palindrome is a word or series of numbers that
// reads the same whether or not it's written forwards or backwards. This

// let num = "2002";
// let num1 = "2002";

// num = num.split('').reverse().join('')

// console.log(num === num1);

                        // Challenge 5

// Create a variable called time, a variable called placeOfWork and a variable called townOfHome. 
// Create an if statement that logs to the console where someone is at times of the day. 
// E.g. if the time is 7 I’m at home, at 8 I’m commuting, at 9 I’m at work

// let time = "7am";
// let time1 = "8am";
// let time2 = "9am";
// let placeOfWork = "Hello Games";
// let townOfHome = "Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch";

// if (time = "7am") {
//     console.log(`Today I woke up at ${time} to start my job at ${placeOfWork}. After getting ready for work, I caught the train from the local 
// train station at ${time1}. I have a bit of a journey to make as I live in ${townOfHome} but I frequently get to my desk at ${time2} 
// where I approach all my tasks for the day.`);
// }

                                  // Challenge 6

// Find the index of a last vowel in the string

// let longSeries = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi"

// function endVowel (x) {
//     let y = x.toLowerCase();
//     let indexOfLastVowel = Math.max(y.lastIndexOf("a"), y.lastIndexOf("e"), y.lastIndexOf("i"), y.lastIndexOf("o"), y.lastIndexOf("u"));
//     return x.charAt(indexOfLastVowel);
// }
// console.log(endVowel(longSeries));

                                 // Challenge 7

// Create a variable called word that takes a string. Create an if statement that checks if the last letter is the same as the first. 
// If it is return true, otherwise return false.

// let word = "pasdfpithsp";

// if (word.charAt(0) == word.charAt(10)) {
//     console.log ("True")
// }
// else {
//     console.log("False")
// }


                      // Challenge 8

// Create two variables called num1 and num2. Create an if statement that checks if the result of the sum is even. 
// If it is return the number, otherwise return the numbers multiplied together.

// let num1 = 3
// let num2 = 6
// let x

// x = (num1 + num2);
// if (x % 2 == 0) {
//     console.log(num1 + num2);
// }
// else {
//     console.log(num1 * num2);
// }


                                                                             // Functions

                        // Challenge 1

// Let’s go back to our naughts and crosses board 
// Create a function that takes 9 parameters and logs our naughts and crosses board to the console.


// const board = (space1, space2, space3, space4, space5, space6, space7, space8, space9) => {
// console.log("            |                   |                  ");   
// console.log(`       ${space1}    |         ${space2}         |     ${space3}    `); 
// console.log("            |                   |                  ");
// console.log("  -------------------------------------------------");
// console.log("            |                   |                  ");   
// console.log(`      ${space4}     |         ${space5}         |     ${space6}    `); 
// console.log("            |                   |                  ");
// console.log("  -------------------------------------------------");
// console.log("            |                   |                  ");   
// console.log(`      ${space7}     |          ${space8}        |     ${space9}    `); 
// console.log("            |                   |                  ");
    
// }

// board(space1 = 'X', space2 = 'O', space3 = 'O', space4 = 'O', space5 = 'X', space6 = 'O', space7 = 'X', space8 = 'O', space9 = 'X');



                        // Challenge 2:
// Create a function that takes a number as a parameter and converts it to a string.

// const newString = (num1) => {
//     num1 = num1.toString();
//     console.log(num1);
// };

// newString(1895)

                        // Challenge 3:
// Create a function that takes a number as a parameter and adds one.

// const plusOne = (num1) => {
//     return num1 + 1;
// }
// console.log(plusOne(2));

                        // Challenge 4:
// Create a function that takes a number as a parameter and takes one off.

// const takeOne = (num1) => {
//     return num1 - 1;
// }
// console.log(takeOne(2));

                        // Challenge 5:
// Create a function that takes two numbers as a parameters and adds them together.

// const plusOne = (num1, num2) => {
//     return num1 + num2;
// }
// console.log(plusOne(2, 4));

                        // Challenge 6:
// Create a function that takes two numbers as a parameters and takes the second one away from the first one.

// const takeAway = (num1, num2) => {
//     return num2 - num1;
// }
// console.log(takeAway(2, 5));


                        // Challenge 7:
// Create a function that takes two numbers as a parameters and multiplies them together.

// const multiplyThem = (num1, num2) => {
//     return num1 * num2;
// }
// console.log(multiplyThem(2, 5));


                        // Challenge 8:
// Create a function that takes two numbers as a parameters and divides the first one by the second one.

// const divideThem = (num1, num2) => {
//     return num1 / num2;
// }
// console.log(divideThem(10, 5));

                        // Challenge 9:
// Create a function that takes a number as a parameter and multiplies it by itself.

// const squareThem = (num1) => {
//     return num1 ** 2;
// }
// console.log(squareThem(5));


                        // Challenge 10:
// Create a function that takes two numbers and an operator as parameters. It should return a print out of the sum e.g. “1 + 2 = 3” or “4 x 6 = 24".
// let num1 = 5;
// let num2 = 7;
// const sumThem = (num1, num2) => {
//     return (num1 + num2).toString();
// }

// console.log(`${num1} + ${num2} =`, sumThem(num1, num2));


                        // Challenge 11:
// Create a function that takes two numbers as a parameters and checks if the first one is greater than the second one.

// let num1 = 9;
// let num2 = 4;

// const comparThem = () => {
//     return (num1 > num2);
// }
// console.log(comparThem());

                        // Challenge 12:
// Create a function that takes two numbers as a parameters and checks if the first one is less than the second one.

// let num1 = 4;
// let num2 = 6;

// const comparThem = () => {
//     return (num1 < num2);
// }
// console.log(comparThem());


                        // Challenge 13:
// Create a function that takes two numbers as a parameters and checks if they are equal.

// let num1 = 12;
// let num2 = 12;

// const comparThem = () => {
//     return (num1 == num2);
// }
// console.log(comparThem());

                        // Challenge 14:
// Create a function that takes two numbers as a parameters and returns the smaller of the two numbers.

// let num1 = 10;
// let num2 = 13;

// const lowerReturn = () => {
//     if (num1 < num2);
//     return num1 < num2;
// }
// console.log(lowerReturn());


                        // Challenge 15:
// Create a function that takes two numbers as a parameters and returns the larger of the two numbers.

// let num1 = 19;
// let num2 = 13;

// const largerReturn = () => {
//     if (num1 > num2);
//     return num1 > num2;
// }
// console.log(largerReturn());

                        // Challenge 16:
// Create a function that takes a number as a parameter and checks if it is even.

// let num = 14;

// if (num % 2 == 0) {
// console.log ("This number is even");
// } 
// else {
//     console.log ("This number is odd");
// }

// let num = 14;

// const oddNum = (num) => {
//     if (oddNum = num % 2 == 0);
//     console.log("This is even");
//  else {
//     console.log("This is odd")};



                        // Challenge 17:
// Create a function that takes a number as a parameter and checks if it is odd.

// let num = 13;

// if (num % 2 == 0) {
// console.log ("This number is even");
// } 
// else {
//     console.log ("This number is odd");
// }


                        // Challenge 18:
// Create a function that takes a number between 0 and 100 and returns a grade based on this system “A”: 90-100% “B”: 80-89% “C”: 70-79% “D”: 60-69% “F”: 0-59%.



                        // Challenge 19:
// Create a function that takes two strings as a parameters and returns the strings concatenated.



                        // Challenge 20:
// Create a function that takes a string as a parameter and counts the number of vowels in it and returns the result.