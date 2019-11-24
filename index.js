let myLibrary = [];

function Book(title, author, pages, ifRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.ifRead = ifRead;
  this.info = function() {
    return `${this.title} by ${this.author}, ${this.pages}.pages, ${this.ifRead ? 'is read' : 'not read yet'}.`;
  }
};

function addBookToLibrary() {
  
};

const knjiga1 = new Book('knjiga1', 'Sasa', 323, true);
const knjiga2 = new Book('knjiga2', 'Petar', 121, true);
const knjiga3 = new Book('knjiga3', 'Jovan', 50, false);

myLibrary.push(knjiga1,knjiga2,knjiga3);

function render() {
  myLibrary.forEach(book => {
    let newRow = document.getElementById("books").insertRow();
    Object.keys(book).forEach(key => {
      if (key != "ifRead" && key != "info") {
        let newCell = newRow.insertCell();
        newCell.textContent = book[key];
      }
    });
  });
};

render();



/* const knjiga1 = new Book('Kurac', 'Sasa', 300, true);

console.log(knjiga1.title);
console.log(knjiga1.author);
console.log(knjiga1.pages);
console.log(knjiga1.ifRead);
console.log("--------------");
console.log(knjiga1.info()); */