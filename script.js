function Library() {
    this.contents = [];
}

function Book(title, author, numPages, read) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.read = read;
}

Book.prototype.toggleBookRead = function () {
    this.read = this.read ? false : true;
}

Library.prototype.addBook = function (title, author, numPages, read) {
    let newBook = new Book(title, author, numPages, read);
    this.contents.push(newBook);
    this.displayBooks();
}

Library.prototype.displayBooks = function () {
    // removes original cards
    libraryContainer.replaceChildren();
    // displays the actual books
    this.contents.forEach(function (book, index) {
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
        newCardReadButton.setAttribute("type", "button");

        newCardRead.appendChild(newCardReadButton);

        let newCardRemove = document.createElement("div");
        newCardRemove.classList.add("card-content");
        newCardRemove.setAttribute("id", "read");
        let newCardRemoveButton = document.createElement("button");
        newCardRemoveButton.classList.add("remove");
        newCardRemoveButton.textContent = "Remove";
        newCardRemoveButton.setAttribute("type", "button");
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
    addBookCard.setAttribute("data-adding", addingBook ? "true" : "false");
    if (addingBook) {
        let newForm = document.createElement("form");
        newForm.setAttribute("method", "post");
        newForm.classList.add("add-book-form");

        let newHeader = document.createElement("h1");
        newHeader.textContent = "Add Book";
        newForm.appendChild(newHeader);

        let formTitleDiv = document.createElement("div");
        formTitleDiv.classList.add("form-container");
        formTitleDiv.setAttribute("id", "title");
        let formTitleLabel = document.createElement("label");
        formTitleLabel.setAttribute("for", "title");
        formTitleLabel.textContent = "Title:";
        let formTitleInput = document.createElement("input");
        formTitleInput.setAttribute("type", "text");
        formTitleInput.setAttribute("id", "title");
        formTitleDiv.appendChild(formTitleLabel);
        formTitleDiv.appendChild(formTitleInput);
        newForm.appendChild(formTitleDiv);

        let formAuthorDiv = document.createElement("div");
        formAuthorDiv.classList.add("form-container");
        formAuthorDiv.setAttribute("id", "author");
        let formAuthorLabel = document.createElement("label");
        formAuthorLabel.setAttribute("for", "author");
        formAuthorLabel.textContent = "Author:";
        let formAuthorInput = document.createElement("input");
        formAuthorInput.setAttribute("type", "text");
        formAuthorInput.setAttribute("id", "author");
        formAuthorDiv.appendChild(formAuthorLabel);
        formAuthorDiv.appendChild(formAuthorInput);
        newForm.appendChild(formAuthorDiv);

        let formNumPagesDiv = document.createElement("div");
        formNumPagesDiv.classList.add("form-container");
        formNumPagesDiv.setAttribute("id", "numPages");
        let formNumPagesLabel = document.createElement("label");
        formNumPagesLabel.setAttribute("for", "numPages");
        formNumPagesLabel.textContent = "Number of Pages:";
        let formNumPagesInput = document.createElement("input");
        formNumPagesInput.setAttribute("type", "number");
        formNumPagesInput.setAttribute("id", "numPages");
        formNumPagesDiv.appendChild(formNumPagesLabel);
        formNumPagesDiv.appendChild(formNumPagesInput);
        newForm.appendChild(formNumPagesDiv);

        let formReadDiv = document.createElement("div");
        formReadDiv.classList.add("form-container");
        formReadDiv.setAttribute("id", "read");
        let formReadLabel = document.createElement("label");
        formReadLabel.setAttribute("for", "read");
        formReadLabel.textContent = "Read?";
        let formReadInput = document.createElement("input");
        formReadInput.setAttribute("type", "checkbox");
        formReadInput.setAttribute("id", "read");
        formReadDiv.appendChild(formReadLabel);
        formReadDiv.appendChild(formReadInput);
        newForm.appendChild(formReadDiv);

        let formButtonsDiv = document.createElement("div");
        formButtonsDiv.classList.add("form-container");
        formButtonsDiv.setAttribute("id", "buttons");
        let submitButton = document.createElement("button");
        submitButton.setAttribute("type", "button");
        submitButton.setAttribute("id", "submit");
        submitButton.textContent = "Submit";
        let cancelButton = document.createElement("button");
        cancelButton.setAttribute("type", "button");
        cancelButton.setAttribute("id", "cancel");
        cancelButton.textContent = "Cancel";
        formButtonsDiv.appendChild(submitButton);
        formButtonsDiv.appendChild(cancelButton);
        newForm.appendChild(formButtonsDiv);
        addBookCard.appendChild(newForm);
    } else {
        let addBookIcon = document.createElement("span")
        addBookIcon.classList.add("material-icons");
        addBookIcon.textContent = "add";
        let addBookText = document.createElement("p");
        addBookText.textContent = "Add book";
        addBookCard.appendChild(addBookIcon);
        addBookCard.appendChild(addBookText);
    }
    

    libraryContainer.appendChild(addBookCard);
    updateReadButtons();
    updateRemoveButtons();
    updateAddBookCard();
}

Library.prototype.removeBook = function (index) {
    this.contents.splice(index, 1);
    this.displayBooks();
}

Library.prototype.toggleBookRead = function (index) {
    this.contents[index].toggleBookRead();
    this.displayBooks();
}

function updateReadButtons() {
    readButtons = document.querySelectorAll("button.read");
    readButtons.forEach(function (element) {
        element.addEventListener("click", function (event) {
            myLibrary.toggleBookRead(event.target.parentNode.parentNode.getAttribute('data-bookIndex'));
            myLibrary.displayBooks();
        });
    });
}

function updateRemoveButtons() {
    removeButtons = document.querySelectorAll("button.remove");
    removeButtons.forEach(function (element) {
        element.addEventListener("click", function (event) {
            myLibrary.removeBook(event.target.parentNode.parentNode.getAttribute('data-bookIndex'));
            myLibrary.displayBooks();
        });
    });
}

function updateAddBookCard() {
    addBook = document.querySelector("div#add-book.card");
    if (!addingBook) {
        addBook.addEventListener("click", function (event) {
            addingBook = true;
            myLibrary.displayBooks();
        });
    } else {
        let titleInput = document.querySelector("input#title");
        let authorInput = document.querySelector("input#author");
        let numPagesInput = document.querySelector("input#numPages");
        let readInput = document.querySelector("input#read");

        let submitButton = document.querySelector("button#submit");
        let cancelButton = document.querySelector("button#cancel");

        submitButton.addEventListener("click", function() {
            let bookTitle = titleInput.value;
            let bookAuthor = authorInput.value;
            let bookNumPagesCheck = numPagesInput.value;
            if (!((bookTitle == '') || (bookAuthor == '') || (bookNumPagesCheck == ''))) {
                let bookNumPages = numPagesInput.valueAsNumber;

                if (bookNumPages < 0) bookNumPages = 0;
                let bookRead = readInput.checked;

                myLibrary.addBook(bookTitle, bookAuthor, bookNumPages, bookRead);
                addingBook = false;
                myLibrary.displayBooks();
            }
        });

        cancelButton.addEventListener("click", function() {
            addingBook = false;
            myLibrary.displayBooks();
        });
    }
}

let libraryContainer = document.querySelector("div.library");
let readButtons = document.querySelectorAll("button.read");
let removeButtons = document.querySelectorAll("button.remove");
let addBook = document.querySelector("div#add-book.card");
let addingBook = false;
let myLibrary = new Library();
myLibrary.displayBooks();