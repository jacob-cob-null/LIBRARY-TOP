// INITIALIZE HTML ELEMENTS
const addButton = document.getElementById('add')
const delButton = document.getElementById('del')
const clear = document.getElementById('clear')
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('closeBtn');
const submitBtn = document.getElementById('submitBtn');
addButton.addEventListener('click', () => {
    modal.showModal();
})
submitBtn.addEventListener('click', () => {
    modal.close();
})
closeBtn.addEventListener('click', () => {
    modal.close();
})

// BOOK OBJECT WITH CONSTRUCTOR

// BOOK ARRAY

// ADD BOOK, show modal, get input value, add to constructor and add to array

// UPDATE STATUS, show modal and iterate array through dropdown

// DELETE BOOK, show modal and iterate array through dropdown

// SHOW BOOK, iterate whole array and inject to html element