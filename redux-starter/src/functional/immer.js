// Immer ...
import { produce } from 'immer';

let book = { title: "Harry Potter" };

function publish(book) {
    //book.isPublished = true;
    return produce(book, draftBook => {
        draftBook.isPublished = true;
    });
}

let updatedBook = publish(book);

console.log(book);
console.log(updatedBook);