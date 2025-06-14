import {
  addButton,
  delButton,
  clear,
  modal,
  closeBtn,
  submitBtn,
  bookList
} from './bookDOM.js';

import { insertBooks } from './render.js';
import { insertInput, books } from './bookData.js';

export function setupEventListeners() {
  addButton.addEventListener('click', () => modal.showModal());

  submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    insertInput();
    insertBooks();
    modal.close();
  });

  clear.addEventListener('click', () => {
    if (confirm('Are you sure you want to clear your entire library? This cannot be undone.')) {
      bookList.innerHTML = '';
      books.length = 0;
      insertBooks();
    }
  });

  closeBtn.addEventListener('click', () => modal.close());

  bookList.addEventListener('click', (event) => {
    const target = event.target;
    const bookDiv = target.closest('.books');
    if (!bookDiv) return;

    const index = parseInt(bookDiv.dataset.index, 10);
    if (isNaN(index) || index < 0 || index >= books.length) return;

    if (target.classList.contains('toggle-read-btn')) {
      books[index].toggleReadStatus();
      insertBooks();
    }

    if (target.classList.contains('delete-book-btn')) {
      if (confirm(`Are you sure you want to delete "${books[index].showTitle()}"?`)) {
        books.splice(index, 1);
        insertBooks();
      }
    }
  });
}
