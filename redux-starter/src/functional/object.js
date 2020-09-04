const person = { nick : "John" };
const car = { name : "BMW" };
// 2 shallow copy
// copy all the properties of this object into empty object
const updated = Object.assign({}, person, { nick : "Jeremy", age: 30}, car, { old : 10})  
// spread operator
const updated2 = {...person, nick : "Jeremy" };
console.log(updated2);

const person2 = {
    name : "John",
    address : {
        country : "USA",
        city : "San Francisco"
    }
}
// shallow copy problem
// const updated3 = { ...person2, name : "Jeremy"};
// updated3.address.city = "New York";

// console.log(person2);

// deep copy
const updated4 = {
    ...person2,
    address : {
        ...person2.address,
        city : "New York"
    },
    name : "Jeremy"
};
console.log(person2);
console.log(updated4);