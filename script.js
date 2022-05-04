let libraryContainer = document.querySelector("div.library");
let readButtons = document.querySelectorAll("button.read");
function Library() {
    this.contents = [];
}

function Book(title, author, numPages, read) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.read = read;
}

Book.prototype.toggleBookRead = function() {
    this.read = this.read ? false : true;
}

Library.prototype.addBook = function(title, author, numPages, read) {
    let newBook = new Book(title, author, numPages, read);
    this.contents.push(newBook);
    this.displayBooks();
}

Library.prototype.displayBooks = function() {
    // removes original cards
    libraryContainer.replaceChildren();
    // displays the actual books
    this.contents.forEach(function(book, index) {
        let displayTitle = book.title;
        let displayAuthor = book.author;
        let displayNumPages = book.numPages;
        let displayRead = book.read;

        // creates a new card
        let newCard = document.createElement("div");
        newCard.classList.add("card")
        newCard.setAttribute("id", "book");

        // adds title
        let newCardTitle = document.createElement("div");
        newCardTitle.classList.add("card-content");
        newCardTitle.setAttribute("id", "title");
        newCardTitle.textContent = displayTitle;

        // adds author
        let newCardAuthor = document.createElement("div");
        newCardAuthor.classList.add("card-content");
        newCardAuthor.setAttribute("id", "author");
        newCardAuthor.textContent = displayAuthor;

        // adds num page
        let newCardNumPages = document.createElement("div");
        newCardNumPages.classList.add("card-content");
        newCardNumPages.setAttribute("id", "numPages");
        newCardNumPages.textContent = displayNumPages.toString() + " pages";

        // adds read
        let newCardRead = document.createElement("div");
        newCardRead.classList.add("card-content");
        newCardRead.setAttribute("id", "read");
        let newCardReadButton = document.createElement("button");
        newCardReadButton.classList.add("read");
        newCardReadButton.textContent = (displayRead) ? "Read" : "Not read";
       
        newCardReadButton.setAttribute("id", displayRead ? "true" : "false");
        
        newCardRead.appendChild(newCardReadButton);

        let newCardRemove = document.createElement("div");
        newCardRemove.classList.add("card-content");
        newCardRemove.setAttribute("id", "read");
        let newCardRemoveButton = document.createElement("button");
        newCardRemoveButton.classList.add("remove");
        newCardRemoveButton.textContent = "Remove";
        newCardRemove.appendChild(newCardRemoveButton);


        newCard.setAttribute("data-bookIndex", index);
        newCard.appendChild(newCardTitle);
        newCard.appendChild(newCardAuthor);
        newCard.appendChild(newCardNumPages);
        newCard.appendChild(newCardRead);
        newCard.appendChild(newCardRemove);
        
        libraryContainer.appendChild(newCard);
    });
    let addBookCard = document.createElement("div");
    addBookCard.classList.add("card");
    addBookCard.setAttribute("id", "add-book");
    let addBookIcon = document.createElement("span")
    addBookIcon.classList.add("material-icons");
    addBookIcon.textContent = "add";
    let addBookText = document.createElement("p");
    addBookText.textContent = "Add book";
    addBookCard.appendChild(addBookIcon);
    addBookCard.appendChild(addBookText);

    libraryContainer.appendChild(addBookCard);
}

Library.prototype.removeBook = function(index) {
    this.contents.splice(index, 1);
    this.displayBooks();
}

Library.prototype.toggleBookRead = function(index) {
    this.contents[index].toggleBookRead();
    this.displayBooks();
}

// readButtons.forEach(function(element) {
//     element.addEventListener('click', event => {
//         console.log("clicked")
//         myLibrary.toggleBookRead(event.target.id);
//         this.displayBooks();
//     });
// });





let myLibrary = new Library();
myLibrary.addBook("testTitle", "test Author", 1234, false)
myLibrary.addBook("testTitle", "test Author", 12345, false)
// myLibrary.removeBook(0);