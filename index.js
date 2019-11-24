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

function clearForm() {

}

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

document.getElementById("addBooks").addEventListener("click", function() {
  document.getElementById('form').style.display='block';
});

document.getElementById("cancelNewBook").addEventListener("click", function() {
  document.getElementById('form').style.display='none';
  document.getElementById('form').reset();
});

window.onclick = function(event) {
  if (event.target == form) {
    form.style.display = "none";
    document.getElementById('form').reset();
  }
}

render();