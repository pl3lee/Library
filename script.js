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
    //
}