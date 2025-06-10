// INITIALIZE HTML ELEMENTS
//BUTTONS
const addButton = document.getElementById('add');
const delButton = document.getElementById('del');
const clear = document.getElementById('clear');
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('closeBtn');
const submitBtn = document.getElementById('submitBtn');
const bookList = document.getElementById('bookList');

addButton.addEventListener('click', () => {
    modal.showModal();

});
submitBtn.addEventListener('click', () => {
    let book1 = new book("TITLE","AUTHOR",244,"READ");
    books.push(book1);
    insertBooks();
    modal.close();
})
clear.addEventListener('click', () => {
    bookList.innerHTML='';
})
closeBtn.addEventListener('click', () => {
    modal.close();
})

// BOOK OBJECT WITH CONSTRUCTOR
class book {
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
        return this.readStatus;
    }
    toggleReadStatus() {
        this.readStatus = !this.readStatus;

    }
}
// BOOK ARRAY
let books = []

// ADD BOOK, show modal, get input value, add to constructor and add to array


// DELETE BOOK, show modal and iterate array through dropdown

// SHOW BOOK, iterate whole array and inject to html element
function insertBooks() {
    books.forEach((book) => {
        let newBook = document.createElement('div');
        newBook.setAttribute('class', 'books')
        newBook.innerHTML = `
    <h1>${book.showTitle()}</h1>
    <h3>${book.showAuthor()}</h3>
    <h4>${book.showPages()}</h4>
    <div>
        <button>Read?</button>
        <h4>${book.showReadStatus()}</h4>
    </div>
`;
        bookList.append(newBook);
    });
}
