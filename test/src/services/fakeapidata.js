const books = [{
  _id: "5b21ca3eeb7f6fbccd471816",
  name: "The Great Gatsby",
  isbn: "3-598-21507-8",
  category: "Fiction",
  row: 5,
  count: 8,
  cost: 18,
  availability: "yes"
},
{
  _id: "5b21ca3eeb7f6fbccd471817",
  name: "Sapiens: A Brief History of Humankind",
  isbn: "0-06-231609-5",
  category: "History",
  row: 3,
  count: 6,
  cost: 15,
  availability: "yes"
},

{
  _id: "5b21ca3eeb7f6fbccd47185a",
  name: "The Alchemist",
  isbn: "0-06-112241-6",
  category: "Fiction",
  row: 4,
  count: 3,
  cost: 14,
  availability: "yes"
},
{
  _id: "5b21ca3eeb7f6fbccd47185b",
  name: "The Catcher in the Rye",
  isbn: "0-316-76948-7",
  category: "Classic",
  row: 7,
  count: 5,
  cost: 16,
  availability: "yes"
},
{
  _id: "5b21ca3eeb7f6fbccd47185c",
  name: "Brave New World",
  isbn: "0-06-085052-3",
  category: "Dystopian",
  row: 3,
  count: 7,
  cost: 20,
  availability: "no"
},
{
  _id: "5b21ca3eeb7f6fbccd471818",
  name: "The Power of Habit",
  isbn: "1-4000-6096-9",
  category: "Personal Development",
  row: 6,
  count: 3,
  cost: 14,
  availability: "no"
},
{
  _id: "5b21ca3eeb7f6fbccd471820",
  name: "To Kill a Mockingbird",
  isbn: "0-06-112008-1",
  category: "Classic",
  row: 9,
  count: 7,
  cost: 16,
  availability: "yes"
}, {
  _id: "5b21ca3eeb7f6fbccd471864",
  name: "The Art of War",
  isbn: "0-19-501476-6",
  category: "Philosophy",
  row: 1,
  count: 4,
  cost: 22,
  availability: "yes"
}, {
  _id: "5b21ca3eeb7f6fbccd471866",
  name: "The Subtle Art of Not Giving a F*ck",
  isbn: "0-06-245771-3",
  category: "Personal Development",
  row: 3,
  count: 6,
  cost: 17,
  availability: "yes"
},
{
  _id: "5b21ca3eeb7f6fbccd471865",
  name: "1984",
  isbn: "0-452-28423-6",
  category: "Dystopian",
  row: 2,
  count: 3,
  cost: 19,
  availability: "yes"
}, {
  _id: "5b21ca3eeb7f6fbccd471819",
  name: "The Hitchhiker's Guide to the Galaxy",
  isbn: "0-330-25864-8",
  category: "Science Fiction",
  row: 1,
  count: 5,
  cost: 20,
  availability: "yes"
},
]

export function getBooks() {
  return books;
}

export function getBook(id) {
  return books.find(m => m._id === id);
}


export function saveBook(newBook) {
  console.log('fun called');
  let bookInDb = books.find(b => b._id === newBook._id) || {};
  bookInDb.name = newBook.name;
  bookInDb.category= newBook.category;
  bookInDb.isbn = newBook.isbn;
  bookInDb.row = newBook.row;
  bookInDb.count = newBook.count;
  bookInDb.cost = newBook.cost;
  bookInDb.availability = newBook.availability;

  if (!bookInDb._id) {
    bookInDb._id = Date.now().toString();
    books.push(bookInDb);
  }

  return bookInDb;
}