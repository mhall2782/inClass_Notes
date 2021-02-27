/*
********************
! ARROW FUNCTIONS
********************

 - AKA: Fat Arrow Functions
 - NOT declarations
 - DO NOT get hoisted

 - Two Types:
    - Consise Body: return is automatic.
    - Block Body: return is not automatic.

*/

//! CONCISE BODY
//                  = >
let speak = (name) => console.log(`The ${name} goes woof!`);
speak('dog');

//! WITH A RETURN
let firstName = 'Melissa';
let lastName = 'Hall';

let concatName = (first, last) => `${first} ${last}`;
console.log(concatName(firstName, lastName));


//! BLOCK BODY
let speakAgain = name => {
    console.log(`The ${name}`);
    console.log('goes woof!');
}
speakAgain('dog');
speakAgain('Melissa');
speakAgain('123');

let concat = (first, last) => {
    console.log('test');
    return `${first} ${last}`;
};
let fullName = concat('Melissa', 'Hall');
console.log(fullName);

let x = 9;
let y = 10;

let answer = (num1, num2) => {
    sum = num1 + num2;
    return sum;
};

console.log(answer(x,y));