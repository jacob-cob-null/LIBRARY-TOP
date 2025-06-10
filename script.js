// INITIALIZE HTML ELEMENTS
//BUTTONS
const addButton = document.getElementById('add');
const delButton = document.getElementById('del');
const clear = document.getElementById('clear');
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('closeBtn');
const submitBtn = document.getElementById('submitBtn');
const bookList = document.getElementById('bookList');
//INPUT FIELDS
const forms = document.getElementById('forms')
const bookName = document.getElementById('bookName');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const readStatus = document.getElementById('readStatus');

// Add button sidepanel
addButton.addEventListener('click', () => {
    modal.showModal();

});
// Submit button form
submitBtn.addEventListener('click', (event) => { 
    event.preventDefault(); 
    insertInput();
    insertBooks();

    modal.close();
})
// Clear button modal
clear.addEventListener('click', () => {
    if (confirm('Are you sure you want to clear your entire library? This cannot be undone.')) {
        bookList.innerHTML = '';
        books.length = 0;
        insertBooks(); 
    }
})

// Close button sidepanel
closeBtn.addEventListener('click', () => {
    modal.close();
})


// BOOK OBJECT WITH CONSTRUCTOR
class Book {
    constructor(title, author, pageNumber, readStatus) {
        this.title = title;
        this.author = author;
        this.pageNumber = pageNumber;
        this.readStatus = readStatus;
    }
    showTitle() {
        return this.title;
    }
    showAuthor() {
        return this.author;
    }

    showPages() {
        return this.pageNumber;
    }
    showReadStatus() {
        // This will return the string 'Read' or 'Unread'
        return this.readStatus;
    }
    toggleReadStatus() {
        // Toggles between the string 'Read' and 'Unread'
        this.readStatus =
            this.readStatus === 'Read'
                ? 'Unread'
                : 'Read';
    }
}
// BOOK ARRAY
let books = []

//INITIAL BOOKS
function initialBooks() {
    let book1 = new Book("The Hobbit", "J.R.R. Tolkien", 310, 'Read');
    let book2 = new Book("1984", "George Orwell", 328, 'Unread');
    let book3 = new Book("Pride and Prejudice", "Jane Austen", 279, 'Read');
    let book4 = new Book("The Hitchhiker's Guide to the Galaxy", "Douglas Adams", 193, 'Unread');
    let book5 = new Book("To Kill a Mockingbird", "Harper Lee", 281, 'Read');
    let book6 = new Book("Dune", "Frank Herbert", 412, 'Unread');

    books.push(book1, book2, book3, book4, book5, book6);
    insertBooks(); 
}
// ADD BOOK
function insertInput() {
    let titleVal = bookName.value.trim();
    let authorVal = author.value.trim(); 
    let pagesVal = parseInt(pages.value); 
    let statusVal = readStatus.checked; 

    if (!validateInput(titleVal, authorVal, pagesVal, statusVal)) {
        alert('Missing Fields, Please complete the form');
        return;
    }
    let strStatus = (statusVal) ? 'Read' : 'Unread';
    let newBook = new Book(titleVal, authorVal, pagesVal, strStatus);
    books.push(newBook);
    forms.reset();
}
function validateInput(bookName, author, pages, readStatus) {
    return !!bookName && !!author && pages > 0 && typeof readStatus === 'boolean';
}

// SHOW BOOK
function insertBooks() {
    bookList.innerHTML = '';

    if (books.length === 0) {
        bookList.innerHTML = '<p class="empty-library-message">Your library is empty. Add some books!</p>';
        return;
    }

    books.forEach((book, index) => {
        let newBookDiv = document.createElement('div'); 
        newBookDiv.setAttribute('class', 'books');
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
            </div>`;
        bookList.append(newBookDiv);
    });
}
// event listener for delete and toggle function
bookList.addEventListener('click', (event) => {
    const target = event.target; 

    const bookDiv = target.closest('.books');
    if (!bookDiv) return; 

    const index = parseInt(bookDiv.dataset.index, 10);
    if (isNaN(index) || index < 0 || index >= books.length) return;

    // Handle Toggle Read Status button click
    if (target.classList.contains('toggle-read-btn')) {
        books[index].toggleReadStatus(); 
        insertBooks(); 
    }
    // Handle Delete Book button click
    if (target.classList.contains('delete-book-btn')) {
        if (confirm(`Are you sure you want to delete "${books[index].showTitle()}"?`)) {
            books.splice(index, 1); 
            insertBooks(); 
        }
    }
});


initialBooks(); 