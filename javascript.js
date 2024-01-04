/*
// Variables

// var - has function scope, only visible in the function where the variable
// was declared, hoisted to the the top of the scope.
var c = "bye";
console.log(c);

// let - has block scope, only visible within the block {} where they are
// declared. Not hoisted to the top of their scope.
let b = 9;

// const cannot be reassigned after it has been initialized.
const t = 9;
// cannot be reassigned.
// t = 2;
console.log(t);
*/


/*
// Functions

function addRegularFunction(a, b)
{
    return a + b;
}
console.log(addRegularFunction(2, 3));

// Anonymous function expression, function defined without a name
let add = function(a, b)
{
    return a + b;
}
console.log(add(20, 21));

// => arrow function - shorter syntax for writing functions
// Arrow function with no parameters
const sayBye = () =>
{
    console.log('sayBye function');
}
sayBye();

// Arrow function with 2 parameters
let multiplyArrowFunction = (a, b) =>
{
    return a * b;
}
console.log(multiplyArrowFunction(4, 4));

// Arrow function with 1 parameter and on oneline
const sqr = (x) => x * x;
console.log(sqr(2));
*/




// if, else statements
const a = 2;
const b = 8;

if (a > b)
{
    console.log(a + " is greater " + b);
}
else
{
    console.log(b + " is greater " + a);
}


// for, while loop




// Arrays