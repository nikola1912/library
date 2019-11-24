let myLibrary = [];

function Book(title, author, pages, ifRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.ifRead = ifRead;
  this.info = function() {
    return `${this.title} by ${this.author}, ${this.pages}.pages, ${this.ifRead ? 'is read' : 'not read yet'}.`;
  }
}

function addBookToLibrary() {
  
}

const knjiga1 = new Book('Kurac', 'Sasa', 300, true);

console.log(knjiga1.title);
console.log(knjiga1.author);
console.log(knjiga1.pages);
console.log(knjiga1.ifRead);
console.log("--------------");
console.log(knjiga1.info());