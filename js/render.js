import { books } from './bookData.js';
import { bookList } from './bookDOM.js';

export function insertBooks() {
  bookList.innerHTML = '';

  if (books.length === 0) {
    bookList.innerHTML = '<p class="empty-library-message">Your library is empty. Add some books!</p>';
    return;
  }

  books.forEach((book, index) => {
    const newBookDiv = document.createElement('div');
    newBookDiv.classList.add('books');
    newBookDiv.dataset.index = index;

    newBookDiv.innerHTML = `
      <h1>${book.showTitle()}</h1>
      <h3>By ${book.showAuthor()}</h3>
      <div class="page-status">
        <h4 style="margin-right: 20px">${book.showPages()} pages</h4>
        <h4 class="read-status-text">${book.showReadStatus()}</h4>
      </div>
      <div class="card-actions">
        <button class="toggle-read-btn" data-action="toggle">
          ${book.showReadStatus() === 'Read' ? 'Mark Unread' : 'Mark Read'}
        </button>
        <button class="delete-book-btn" data-action="delete">Delete</button>
      </div>
    `;

    bookList.appendChild(newBookDiv);
  });
}
