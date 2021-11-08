class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this._state = 100;
    this.type = null;
  }

  fix() {
    this._state = this._state * 1.5;
  }

  set state(newState) {
    if (newState < 0) {
      this._state = 0;
    } else if (newState > 100) {
      this._state = 100;
    } else {
      this._state = newState;
    }
  }

  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}

class Book extends Magazine {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = "book";
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "detective";
  }
}

//Задание 2
class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    switch (type) {
      case "type":
        let bookByType = this.books.find((book) => book.type === value);
        if (typeof bookByType === "undefined") {
          return null;
        } else {
          return bookByType;
        }
      case "author":
        let bookByAuthor = this.books.find((book) => book.author === value);
        if (typeof bookByAuthor === "undefined") {
          return null;
        } else {
          return bookByAuthor;
        }
      case "name":
        let bookByName = this.books.find((book) => book.name === value);
        if (typeof bookByName === "undefined") {
          return null;
        } else {
          return bookByName;
        }
      case "releaseDate":
        let bookByRelease = this.books.find(
          (book) => book.releaseDate === value
        );
        if (typeof bookByRelease === "undefined") {
          return null;
        } else {
          return bookByRelease;
        }
      default:
        return null;
    }
  }

  giveBookByName(bookName) {
    let book = this.books.find((book) => book.name === bookName);

    if (typeof book === "undefined") {
      return null;
    } else {
      let index = this.books.indexOf(book);
      if (index > -1) {
        this.books.splice(index, 1);
      }
      return book;
    }
  }
}

//Проверка
let myLibrary = new Library("Библиотека имени меня");

let book1 = new Book("Тим Феррисс", "4х-часовая рабочая неделя", 2000, 600);
let book2 = new NovelBook("Джонатан Сафран Фоер", "Планета", 2021, 340);
let book3 = new NovelBook(
  "Джеймс Оливер Кервуд",
  "Бродяги с севера",
  1919,
  400
);

myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);

console.log(myLibrary.findBookBy("releaseDate", 1919));

console.log("Количество книг до выдачи: " + myLibrary.books.length); 
let givenBook = myLibrary.giveBookByName("Планета")
console.log("Количество книг после выдачи: " + myLibrary.books.length); 

console.log(givenBook.state)
givenBook.state = 30
console.log(givenBook.state)

givenBook.fix()
console.log(givenBook.state)

myLibrary.addBook(givenBook)
console.log("Количество книг после добавления исправленной книги: " + myLibrary.books.length);