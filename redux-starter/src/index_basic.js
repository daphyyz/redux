import { compose, pipe } from 'lodash/fp';
import { toLower, update } from 'lodash';

// function sayHello() {
//     return "Hello World";
// }

// function sayHello() {
//     return function() {
//         return "Hello World";
//     }
// }
// let fn = sayHello();
// let message = fn();
// let fn = sayHello;
// fn()
// sayHello()

/*=====================================================================
Higher-order Function
-. Function that takes a function as an arguments or returns it or both.
=====================================================================*/
//let numbers = [1, 2, 3];
//numbers.map(number => number * 2);

//setTimeout(() => console.log("Hello"), 1000);
function greet(fn) {
    console.log(fn());
}

function sayHello() {
    return function() {
        return "Hello World";
    }
}

//greet(sayHello);

//let numbers = [1, 2, 3];
//numbers.map(number => number * 2);

//setTimeout(() => console.log("Hello"), 1000);



/*=====================================================================
Pure Function (same args => same results)
-. No random values
-. No current date/time
-. No global state (DOM, files, db, etc)

Benefits
-. Self-documenting
-. Easily testable
-. Concurrency
-. Cacheable
=====================================================================*/
function myFunction(number) {
    //return number * Math.random();  // impure
    return number * 2;              // pure 1 * 2 = always 2
}

function isEligible(age) {              // impure
    return age > minAge;
}

function isEligible2(age, minAge) {     // pure
    return age > minAge;
}

/*=====================================================================
Immutability
-. Once created, cannot be changed!

Benefits
-. Predictability 
-. Faster Change detection
    obj1(100), obj2(200)  if(obj1 == obj2) it compares these objects by the references
    comparing 100 with 200
=====================================================================*/
let name = "Jeremy";
let newName = name.toUpperCase();

// let book = {}; 
// book.title = "...";

// const book2 = {};
// book2.title = "..."; // acceptable, but don't use like this in Redux.
//book2 = {}; // error, can't reassign cconstant variable. Const prevent reassignment



/*=====================================================================
Libraries
-. Immutable (by facebook)
-. Immer 
-. Mori
=====================================================================*/

/*=====================================================================
Redux
-. Design the store
-. Define the actions
-. Create a reducer
-. Set up the store
=====================================================================*/
/*=====================================================================
Store
[
    {
        id: 1,
        descrption: "",
        resolved: false
    },
    { ... },
    { ... },
]

{
    bugs: [
        {
            id: 1,
            description: "",
            resolved: false
        },        
    ],
    curretnUser: {}
}
=====================================================================*/
/*=====================================================================
Action : Plain javascript objects
-. Add a bug
-. Mark as resolved
-. Delete a bug
{
    type: "bugAdded",    // ADD_BUG
    payload: {
        description: "..."
    }    
}
{
    type: "bugRemoved",
    payload: {
        id: 1
    }
}
=====================================================================*/