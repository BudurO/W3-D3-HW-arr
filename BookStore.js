let Books = [
  {
    Booktitle: "Clean Code",
    numberOfpages: 192,
    Author: "Robert Cecil Martin",
    available: false,
  },
  {
    Booktitle: "Design Patterns",
    numberOfpages: 390,
    Author: "Erich Gamma",
    available: true,
  },
  {
    Booktitle: "Code Complete",
    numberOfpages: 1024,
    Author: "Steve McConnell",
    available: false,
  },
  {
    Booktitle: "The Pragmatic Programmer",
    numberOfpages: 392,
    Author: "Andrew Hunt and David Thomas",
    available: true,
  },
  {
    Booktitle: "Refactoring",
    numberOfpages: 448,
    Author: "Martin Fowler",
    available: true,
  },
];

// Q1

for (let i = 0; i < Books.length; i++) {
  let book = Books[i];
  console.log("Title :", book.Booktitle);
  console.log("Author :", book.Author);
  console.log("number Of pages :", book.numberOfpages);
}

console.log("----------------------------------------------");

// Q2

function borrowBook(Booktitle, Nameborrower) {
  let elfindBook = Books.find(function (elementBook) {
    return elementBook.Booktitle == Booktitle;
  });
  if (elfindBook.available == true) {
    console.log("it is Book available For borrow");

    elfindBook.available = false;

    elfindBook.Nameborrower = Nameborrower;

    console.log(elfindBook);
  } else {
    console.log("it is not Book available For borrow");
  }
}

console.log("----------------------------------------------");

// Q3

function returnBook(Booktitle) {
  let elreturnBook = Books.find(function (elementBookelreturn) {
    return elementBookelreturn.Booktitle == Booktitle;
  });
  if (elreturnBook.Nameborrower) {
    elreturnBook.available = true;

    delete elreturnBook.Nameborrower;
  } else {
    console.log("the book was never borrowed");
  }
}

// Q4
console.log("Test functions:");

borrowBook("Refactoring", "Budur");
borrowBook("Clean Code", "salem");
returnBook("Refactoring");
returnBook("Code Complete");
returnBook("Design Patterns");
returnBook("Clean Code");
borrowBook("The Pragmatic Programmer", "BudurSalem");

// Q5
console.log("----------------------------------------------");
for (let i = 0; i < Books.length; i++) {
  let book = Books[i];
  console.log("Title :", book.Booktitle);
  console.log("Author :", book.Author);
  console.log("number Of pages :", book.numberOfpages);

  if (book.Nameborrower) {
    console.log("borrower: ", book.Nameborrower);
  } else {
    console.log("it is not borrower");
  }
}
console.log("----------------------------------------------");

// Q6

function addBook(NewBook) {
  Books.push(NewBook);
}
let NewBook = {
  Booktitle: "Design Patterns 01",
  numberOfpages: 320,
  Author: "Erich Gamma",
  available: true,
};
addBook(NewBook);
console.log(NewBook);

console.log("----------------------------------------------");
console.log("----------------------------------------------");
console.log("----------------------------------------------");

function searchBook(search) {
  const searshBooks = Books.filter(function (elsearchBook) {
    return (
      elsearchBook.Booktitle == search ||
      elsearchBook.Author == search ||
      elsearchBook.Nameborrower == search
    );
  });
  console.log(searshBooks);
}
console.log("----------------------------------------------");
console.log("----------------------------------------------");
console.log("----------------------------------------------");
searchBook("Clean Code");
searchBook("Budur");
searchBook("Steve McConnell");
searchBook("BudurSalem");
