const openModal = document.querySelector(".new-book");
const modal = document.querySelector(".modal");
const cancelBtn = document.getElementById("cancel-button");
const form = document.getElementById("form");
const bookList = document.getElementById("book-list");
let myLibrary = [];



openModal.addEventListener("click", () => {
    modal.showModal();
})

cancelBtn.addEventListener("click", () => {
    modal.close();
    form.reset();
})


function Book(title, author, pages, read) {  
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}
 
form.addEventListener("submit", function addBookToLibrary(e) {
    e.preventDefault();
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("checkbox").checked;
    if (read === true) {
        read = "yes";
    } else {
        read = "no";
    }
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    modal.close();
    form.reset();
    bookLoops();
   
})


function bookLoops() {
        const bookBox = document.createElement("div");
        bookList.appendChild(bookBox);
        bookBox.setAttribute("class","book-container");
        bookBox.innerHTML =
            "Title: " + myLibrary[0].title +
            " Author: " + myLibrary[0].author +
            " Pages: " + myLibrary[0].pages +
            " Read: " + myLibrary[0].read;
        clearLibrary();
        console.log(myLibrary);
    }

function clearLibrary() {
    myLibrary = [];
}







