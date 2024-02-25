const openModal = document.querySelector(".new-book");
const modal = document.querySelector(".modal");
const myLibrary = [];

openModal.addEventListener("click", () => {
    modal.showModal();
})



function Book(title, author, pages, read) {  
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {

}
    






