let libraryContainer = document.querySelector("div.library");

function Library() {
    this.contents = [];
}

function Book(title, author, numPages, read) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.read = read;
}

Library.prototype.addBook = function(title, author, numPages, read) {
    let newBook = new Book(title, author, numPages, read);
    this.contents.push(newBook);
}

Library.prototype.displayBooks = function() {
    this.contents.forEach(function(book) {
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
        newCardNumPages.textContent = displayNumPages;

        // adds read
        let newCardRead = document.createElement("div");
        newCardRead.classList.add("card-content");
        newCardRead.setAttribute("id", "read");
        
        newCardRead.textContent = displayRead;


        newCard.appendChild(newCardTitle);
        newCard.appendChild(newCardAuthor);
        newCard.appendChild(newCardNumPages);
        newCard.appendChild(newCardRead);
        libraryContainer.appendChild(newCard);
    })
}

let myLibrary = new Library();
myLibrary.addBook("testTitle", "test Author", "testPages", true)
myLibrary.displayBooks();