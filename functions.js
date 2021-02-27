/*
*****************
! FUNCTIONS
*****************
    Types of Functions:
        - Declaration
        - Expression
        - Anonymous
*/

//! Function Declaration

function declaration() {
    console.log('I\'m a Function Declaration');
    }

    declaration();
    // are hoisted
    // runs when we call them (invoked)

//! Function Expression

let expression = function() {
    console.log('I\'m a Function Expression');
}
expression();
// NOT hoisted
// invoked using the variable name