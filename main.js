const bookShelf = document.getElementsByClassName("bookshelf")[0];

let myLibrary = [];

function Book(title,author,pagesNumber, isRead){
    this.title = title;
    this.author = author;
    this.pagesNumber = pagesNumber;
    this.isRead = isRead; 
}

function removeBookFromLibrary(title){
    myLibrary.splice(myLibrary.findIndex(a => a.title === title));
}

function addBookToLibrary(book){
    myLibrary.push(book);
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");
    bookShelf.appendChild(bookCard);
    const bookInfo = document.createElement("div");
    bookInfo.classList.add("book-info");
    bookCard.appendChild(bookInfo);
    const title = document.createElement("p");
    title.classList.add("title");
    const author = document.createElement("p");
    author.classList.add("author");
    const pages = document.createElement("p");
    pages.classList.add("pages");
    title.textContent = book.title;
    author.textContent = book.author;
    pages.textContent = book.pagesNumber;
    bookInfo.appendChild(title);
    bookInfo.appendChild(author);
    bookInfo.appendChild(pages);
    const bookButtons = document.createElement("div");
    bookButtons.classList.add("book-buttons");
    const readButton = document.createElement("button");
    readButton.classList.add("read-book");
    const removeButton = document.createElement("button");
    removeButton.classList.add("remove-book");
    let index = (element) => element.title === book.title;
    readButton.dataset.bookIndex = myLibrary.findIndex(index);
    removeButton.dataset.bookIndex = myLibrary.findIndex(index);
    bookButtons.appendChild(readButton);
    bookButtons.appendChild(removeButton);
    bookCard.appendChild(bookButtons);
}

function createBook(){
    const title = document.getElementById("title").value; 
    const author = document.getElementById("author").value;
    const pagesNumber = document.getElementById("pagesNumber").value;
    const isRead = document.getElementById("isRead").checked; 
    const newBook = new Book(title,author,pagesNumber,isRead);
    addBookToLibrary(newBook);
}

function listBooks(){
    myLibrary.forEach(book => {
        console.log(book);
    });
}

let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("add-book");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

