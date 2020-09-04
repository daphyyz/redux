// let book = { title: "Harry Potter" };

// function publish(book) {
//     book.isPublished = true;
// }

// publish(book);

// console.log(book);

// Immutable.js
import { Map } from 'immutable';

//let book = { title: "Harry Potter" }; 
let book = Map({ title : "Harry Potter"});

function publish(book) {
    //book.isPublished = true;

    // not gonna modify original book object it's going to returns a new object Map objects is immutable 
    return book.set("isPublished", true); 
}

book = publish(book);


//console.log(book.get("title"));
console.log(book.toJS());