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
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    modal.close();
    form.reset();
    bookLoops();
    clearLibrary();
})

function bookLoops() {
        const bookBox = document.createElement("div");
        const readBtn = document.createElement("button");
        const removeBtn = document.createElement("button");

        bookList.appendChild(bookBox);
        bookBox.setAttribute("class","book-container");

        bookBox.innerHTML += "<h2>" + myLibrary[0].title + "</h2>";
        bookBox.innerHTML += "<p>Book by: " + myLibrary[0].author + "</p>";
        bookBox.innerHTML += "<p>Pages: " + myLibrary[0].pages + "</p>";

        bookBox.append(readBtn);
        bookBox.append(removeBtn);
        readBtn.setAttribute("id","toggle-read");
        removeBtn.setAttribute("id","delete");

        removeBtn.style.backgroundColor = "red";
        removeBtn.textContent = "Delete";

       if (myLibrary[0].read === true) {
        readBtn.textContent = "Read";
        readBtn.style.backgroundColor = "#2ea44f";
       } else {
        readBtn.textContent = "not read";
        readBtn.style.backgroundColor = "red";
       };

        readBtn.addEventListener("click", function() {
            if(readBtn.textContent === "Read") {
                readBtn.textContent = "not read";
                readBtn.style.backgroundColor = "red"
            } else {
                readBtn.textContent = "Read"
                readBtn.style.backgroundColor = "#2ea44f"
            }
        });

        removeBtn.addEventListener("click", function() {
          bookBox.remove();
        });
    }

  
function clearLibrary() {
    myLibrary = [];
};










