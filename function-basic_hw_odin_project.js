/* Problem to solve
For now, just write each function and test the output with console.log.

    Write a function called add7 that takes one number and returns that number + 7.
    Write a function called multiply that takes 2 numbers and returns their product.
    Write a function called capitalize that takes a string and returns that string with only the first letter capitalized. Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.
    Write a function called lastLetter that takes a string and returns the very last letter of that string:
        lastLetter("abcd") should return "d"

*/

function add7(num ) {
   let new_num=  num + 7 ;
    return new_num ;
}

let num = 7;
console.log(add7(num));

function multiply(num1 , num2) {
    let num3 = num1 * num2 ;
    return num3;
}

let num1 = 3 , num2 = 4; 

console.log(multiply(num1, num2));