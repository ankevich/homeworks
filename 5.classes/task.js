class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  fix() {
    return state * 1.5;
  }

  set control(state){
    if (state < 0) {
        return state === 0
    } if (atste > 100) {
        return state === 100
    } return state
     
  }

  get control(){
      return this._control
  }
  let control  = state < 0 ? state === 0 : state

  
}


class Magazin extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount)
        this.type = "magazin"
    }
}

class Book extends Magazin {
    constructor(name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount) 
        this.autor = autor 
        this.type = "book"
    }
}

class NovelBook extends Book {
    constructor(){
        this.type = "novel"
    }
}
class FantasticBook extends Book {
    constructor(){
        this.type = "fantastic"
    }
}
class DetectiveBook extends Book {
    constructor(){
        this.type = "detective"
    }
}


// Проверка
const sherlock = new PrintEditionItem(
  "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
  2019,
  1008
);

console.log(sherlock.releaseDate); //2019
console.log(sherlock.state); //100
sherlock.fix();
console.log(sherlock.state); //100


const picknick = new FantasticBook(
    "Аркадий и Борис Стругацкие",
    "Пикник на обочине",
    1972,
    168
  );
  
  console.log(picknick.author); //"Аркадий и Борис Стругацкие"
  picknick.state = 10;
  console.log(picknick.state); //10
  picknick.fix();
  console.log(picknick.state); //15


    
  //Задание 2
  class Library {
    constructor(name, books) {
    this.name = ""
    this.books = []
    }

    addBook(books){
        this.books = state > 30
       
    }
}




//Проверка
const library = new Library("Библиотека имени Ленина");

library.addBook(
new DetectiveBook(
  "Артур Конан Дойл",
  "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
  2019,
  1008
)
);
library.addBook(
new FantasticBook(
  "Аркадий и Борис Стругацкие",
  "Пикник на обочине",
  1972,
  168
)
);
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

console.log(library.findBookBy("name", "Властелин колец")); //null
console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"

console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3
