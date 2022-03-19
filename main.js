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