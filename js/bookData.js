import { Book } from './Book.js';
import { bookName, author, pages, readStatus, forms } from './bookDOM.js';

export let books = [];

export function initialBooks() {
  const sampleBooks = [
    new Book("The Hobbit", "J.R.R. Tolkien", 310, 'Read'),
    new Book("1984", "George Orwell", 328, 'Unread'),
    new Book("Pride and Prejudice", "Jane Austen", 279, 'Read'),
    new Book("The Hitchhiker's Guide to the Galaxy", "Douglas Adams", 193, 'Unread'),
    new Book("To Kill a Mockingbird", "Harper Lee", 281, 'Read'),
    new Book("Dune", "Frank Herbert", 412, 'Unread')
  ];
  books.push(...sampleBooks);
}

export function insertInput() {
  const titleVal = bookName.value.trim();
  const authorVal = author.value.trim();
  const pagesVal = parseInt(pages.value);
  const statusVal = readStatus.checked;

  if (!validateInput(titleVal, authorVal, pagesVal, statusVal)) {
    alert('Missing Fields, Please complete the form');
    return;
  }

  const strStatus = statusVal ? 'Read' : 'Unread';
  const newBook = new Book(titleVal, authorVal, pagesVal, strStatus);
  books.push(newBook);
  forms.reset();
}

export function validateInput(title, author, pages, readStatus) {
  return !!title && !!author && pages > 0 && typeof readStatus === 'boolean';
}
