/*
***************
!PARAMETERS
***************

    - Parameters are values we haven't assigned yet.
    - Passed through functions called as arguments.

    ex:
        function nameFunc(parameter) {
            return ...
        }

        nameFunc(argument);

    - naming should reflect desired data
*/

function coffeePot(filter) {
    console.log(`I brewed some ${filter}.`);
}

coffeePot('dark roast'); //"dark roast" is my argument/value being passed
coffeePot('medium roast');
coffeePot('peppermint tea');

let kettle = coffeePot; //<-- funtion reference
kettle(); //<-- returns an undefined where out value should be
kettle('green tea');


//! MULTIPLE PARAMETERS & ARGUMENTS

function dinner(main, side, drink) {
    console.log(`For dinner, I had ${main} and ${side}. To wash it down, I had a ${drink}.`);
    };

    dinner('steak', 'potatoes', 'coke');
    dinner('potatoes', 'coke', 'steak');
    // - arguments fall in line with parameters regarding their postion

//! RETURN
// - Function can manipulate our data and return a new value.

function calc(one, two, three) {
    let total = one + two + three;
    let coverage = Math.round(total / 3); // Math.round() rounds the value to the nearest integer
    return average;
}

let avgWeight = calc(15,60,55);
console.log(`These three dogs weigh an average ${avgWeight} lbs.`);
console.log(calc(18,20,22));



