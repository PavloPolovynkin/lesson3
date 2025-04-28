import { Book } from "./Book.js";
export class EBook extends Book {
    constructor(title, author, year, fileType) {
        super(title, author, year);
        this.fileType = fileType;
    }

    printInfo() {
        console.log(`Book: ${this.title}, author: ${this.author}, year of publication: ${this.year}, file type: ${this.fileType}`)
    }

    get fileType () {
        return this._fileType;
    }

    set fileType(fileTypeUnderTest) {
        if (typeof fileTypeUnderTest !== 'string') {
            console.log(`----${typeof fileTypeUnderTest.fileType}`)
            console.log(`Error, please enter text for 'fileType'`);
            return;
        }
        this._fileType = fileTypeUnderTest; 
    }

    //
    static someTypeOfBook(someBook, addFileType) {
        return new EBook(someBook.title, someBook.author, someBook.year, addFileType);
    }
}
///
//  const ebook1 = new EBook('Lovecraft', 'The call of Cthulhu' , 1976, 'txt');

//  ebook1.printInfo()

// ebook1.fileType = 'txt'; // setter // !we will see current value if our param is valid!   - year: should be a number
// console.log(ebook1.fileType); // getter with param from setter

// console.log(someTypeOfBook(book1, 'txt'))
