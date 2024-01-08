console.clear();

/*
1: Create the data for a book in an online store. Create variables for the following data:
  - the book title
  - the author
  - the rating
  - the number of sales
*/

// --v-- write your code here --v--

const bookTitle = "The Lord of the Javascript";
const bookAuthor = "Mario";
let bookRating = 4.2;
let booksSold = 120;

// --^-- write your code here --^--

/*
2: Log all variables to the console, for example:

Title: The Lord of the Javascript
Author: Mario
Rating: 4.2
Sales: 120

Increase the number of sales and change the rating of the book afterwards.
Then log all variables to the console again.
*/

// --v-- write your code here --v--

// console.log("Title: " + bookTitle);
// console.log("Author: " + bookAuthor);
// console.log("Rating: " + bookRating);
// console.log("Sales: " + booksSold);

// bookRating += 0.2;
// booksSold += 80;

// console.log();
// console.log("Title: " + bookTitle);
// console.log("Author: " + bookAuthor);
// console.log("Rating: " + bookRating);
// console.log("Sales: " + booksSold);

// console.log();

// --^-- write your code here --^--

/*
3: This code is quite repetitive and hard to read.
 - Write a function called logBookData which console logs all
   variables when it is called.
 - Then replace the console logs above with this function.
 - Now increase the number of sales 2 more times and log the data after each increase.
*/

// --v-- write your code here --v--

function bookInfoPanel (bookTitle, bookAuthor, bookRating, booksSold) {
  console.log("Aktuelles Datum XX.XX.XXXX");
  console.log();
  console.log("Title: " + bookTitle);
  console.log("Author: " + bookAuthor);
  console.log("Rating: " + bookRating);
  console.log("Sales: " + booksSold);
  console.log();
}

bookInfoPanel (bookTitle, bookAuthor, bookRating, booksSold);

bookRating += 0.1;

booksSold += 70;

bookInfoPanel (bookTitle, bookAuthor, bookRating, booksSold);

bookRating -= 0.8;
booksSold += 500;

bookInfoPanel (bookTitle, bookAuthor, bookRating, booksSold);

// --^-- write your code here --^--
