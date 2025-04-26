import { Book } from "./Book.js";
import { EBook } from "./EBook.js";

//task1
console.log(`___Task1___`);
const book1 = new Book('Lovecraft', 'The call of Cthulhu' ,1928);
const book2 = new Book('Remark', 'Black obelisk' ,1964);
const book3 = new Book('Lovecraft', 'The call of Cthulhu' ,1976);
const book4 = new Book('Lovecraft', 'The call of Cthulhu' ,1900);  //if validation return error(s) we will see this params from current instance.

book1.printInfo()
book2.printInfo()
book3.printInfo()

//task2
console.log(`___Task2___`);
const ebook1 = new EBook('Lovecraft', 'The call of Cthulhu' , 1976, 'txt');
ebook1.printInfo()

//task3
console.log(`___Task3_Book___`);
book4.book = {author: 'The text', title: 'TestAuthor', year: 1888}; // setter // !we will see current value if our param is valid!   - year: should be a number
console.log(book4.book); // getter with param from setter
console.log(`___Task3_EBook___`);
ebook1.fileType = 'txt'; // setter // !we will see current value if our param is valid!   - year: should be a number
console.log(ebook1); // getter with param from setter
console.log(`File format: ${ebook1.fileType}`);

//task4
console.log(`___Task4___`);
//mass of all instances for task #4
const oldestBook = [
    book1,
    book2,
    book3,
    book4
]
//returned the oldest book for task #4
console.log(`The oldest book is - ${Book.oldest(oldestBook)}`)  

//task5
console.log(`___Task5___`);
const ebookFromBook = EBook.someTypeOfBook(book1, 'txt');
ebookFromBook.printInfo
