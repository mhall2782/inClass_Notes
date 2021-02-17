/*
    Challenge:
    Create a variable named FB that takes numbers
    Write an ELSE/IF conditional that: 
    Prints out "Fizz" if the number is divisible by 3
    Prints out "Buzz" if the number is divisible by 5
    Prints out "Fizz Buzz" if the number is divisible by BOTH 3 and 5
    Convert this to SWITCH STATEMENT and then a TERNARY
*/

let z = 15;
let x = 3;
let y = 5;
if(z / x == 5 && z / y == 3) {
    console.log('Fizz Buzz');
} else if(z / y == 3) {
    console.log('Buzz');
} else if(z / x == 5) {
    console.log('Fizz');
} else {
    console.log('Youre wrong');
}
let fb = 15;
if(fb % 3 === 0 && fb % 5 !== 0) {
    console.log('Fizz');
} else if(fb % 5 === 0 && fb % 3 !== 0) {
    console.log('Buzz');
} else if(fb % 5 === 0 && fb % 3 === 0) {
    console.log('Fizz Buzz');
} else {
    console.log(fb);
}

let FB = 5;
if(FB % 3 === 0 && FB % 5 === 0) {
    console.log('Fizz Buzz');
} else if (FB % 5 === 0) {
    console.log('Buzz');
} else if (FB % 3 === 0) {
    console.log('Fizz');
}

let fb = 15;
// fb % 5 == 0 && fb % 3 == 0 ? console.log('Fizz Buzz') : 
// fb % 3 == 0 ? console.log('Fizz') : 
// fb % 5 == 0 ? console.log('Buzz') : 
// console.log(fb);
switch(true) {
    case (fb % 3 === 0 && fb % 5 === 0) :
        console.log('Fizz Buzz');
        break;
    case (fb % 5 === 0) :
        console.log('Buzz');
        break;
    case (fb % 3 === 0):
        console.log('Fizz');
        break;
}
