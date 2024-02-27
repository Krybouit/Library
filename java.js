const openModal = document.querySelector(".new-book");
const modal = document.querySelector(".modal");
const cancelBtn = document.getElementById("cancel-button");
const submitBtn = document.getElementById("submit");
const myLibrary = [];

openModal.addEventListener("click", () => {
    modal.showModal();
})

cancelBtn.addEventListener("click", () => {
    modal.close();
})

function Book(title, author, pages, read) {  
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}
 
submitBtn.addEventListener("click", function addBookToLibrary(e) {
    e.preventDefault()
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
    console.log(myLibrary);
})





