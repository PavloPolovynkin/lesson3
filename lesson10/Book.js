export class Book {
	constructor(author, title, year) {
		this.title = title;
		this.author = author;
		this.year = year;
	}

	//some static method for sorting years of list books
	static oldest(books) {
		if (!books.length) {
			console.log('Error: Массив пустой');
			return null;
		}

		let oldest = books[0];

		for (let book of books) {
			if (Number(book.year) < Number(oldest.year)) {
				oldest = book;
			}
		}

		return oldest.title;
	}

	get book() {
		return {
			title: this.title,
			author: this.author,
			year: this.year,
		};
	}

	set book({ title, author, year }) {
		if (typeof title !== 'string') {
			console.log(`Error, please enter text for 'title'`);
			return;
		} else if (typeof author !== 'string') {
			console.log(`Error, please enter text for 'author`);
			return;
		} else if (typeof year !== 'number') {
			console.log(`Error, please enter number`);
			return;
		}

		this.title = title;
		this.author = author;
		this.year = year;
	}

	printInfo() {
		console.log(`Book: ${this.title}, author: ${this.author}, year of publication: ${this.year}`);
	}
}
///
// const book1 = new Book('Lovecraft', 'The call of Cthulhu' ,1928);
// const book2 = new Book('Remark', 'Black obelisk' ,1964);
// const book3 = new Book('Lovecraft', 'The call of Cthulhu' ,1976);
// const book4 = new Book('Lovecraft', 'The call of Cthulhu' ,1900);  //if validation return error(s) we will see this params from current instance.

// book1.printInfo()
// book2.printInfo()
// book3.printInfo()

// book4.book = {author: 'The text', title: 'TestAuthor', year: 1888}; // setter // !we will see current value if our param is valid!   - year: should be a number
// console.log(book4.book); // getter with param from setter

// //mass of all instances for task #4
// const oldestBook = [
//     book1,
//     book2,
//     book3,
//     book4
// ]

// console.log(`The oldest book is - ${Book.oldest(oldestBook)}`)  //returned the oldest book for task #4
