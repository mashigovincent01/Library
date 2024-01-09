const myLibrary = [];

function Book(){
    //constructor
    this.title = "",
    this.author = "";
    this.pages = 0;
    this.isRead = false;
}

function Book(title, author, pages, isRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function populateLibrary(){
    const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 180, true);
    const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 281, false);
    const book3 = new Book("1984", "George Orwell", 328, true);
    const book4 = new Book("Brave New World", "Aldous Huxley", 311, false);
    const book5 = new Book("Pride and Prejudice", "Jane Austen", 432, true);
    myLibrary.push(book1, book2, book3, book4, book5);
}



populateLibrary();
showBooks();


let res = "";
function buttonEventListeners(){
    let removeButtons = document.getElementsByClassName("remove");
    for(let i = 0; i < removeButtons.length; i++){
        removeButtons[i].addEventListener("click", ()=>{
             myLibrary.splice(i, 1);
             document.querySelector(".books").innerHTML = "";
             showBooks();
        });
    }
}

function addBookToLibrary(){

    //do stuff here
}

function showBooks(){
    
    let booksContainer = document.querySelector(".books");
    for(let i = 0; i < myLibrary.length; i++){
        booksContainer.innerHTML += createCard(myLibrary[i], i);
    }
    buttonEventListeners();
}
function createCard(book, id){
    let card = `<div class="card">`;
    card += `<h3>  ${book.title} </h3>`;
    card += `<p>Author: ${book.author}</p>`;
    card += `<p>Pages: ${book.pages}</p>`;
    card += `<p>Read: ${book.isRead ? "Yes" : "No"}</p>`;
    card += `<div class=buttons>`;
    card += `<button class="remove" id=${id}>Remove</button>`;
    // card += `<button class="edit" id=${id}>edit</button>`;
    card += `</div>`;
    card += `</div>`;
    return card;
}





