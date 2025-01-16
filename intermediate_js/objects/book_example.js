function books(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read

    this.info = function () {
        if (this.read) {
            this.read = ". I have read it."
        }
        else {
            this.read = ". I have not read it."

        }
        console.log("The book, " + this.title + " was written by " + this.author + " and it has " + this.pages + this.read)
    }
}

const book_1 = new books("Harry Potter", "J.K Rowling", 700, false);

book_1.info();

book_1.read = true;

book_1.info();
