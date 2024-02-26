const openModal = document.querySelector(".new-book");
const modal = document.querySelector(".modal");
const cancelBtn = document.getElementById("cancel-button");
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

function addBookToLibrary() {

}
    






