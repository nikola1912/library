let myLibrary = [];

function Book(title, author, pages, year, ifRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.year = year
  this.ifRead = ifRead;
  this.info = function() {
    return `${this.title} by ${this.author}, ${this.pages}.pages, ${this.ifRead ? 'is read' : 'not read yet'}.`;
  }
};

function addBookToLibrary() {
  let form = document.getElementById("form").elements;
  let formValues = [];
  for (let formElement of form) {
    if (formElement.type == "text") {  //ovde si obriso  || formElement.checked
      formValues.push(formElement.value);  
    } else if (formElement.checked) {
      formValues.push(formElement.value == "true");
    } else if (formElement.type == "number") {
      formValues.push(Number(formElement.value));
    }
  }
  let newBook = new Book(...formValues);
  myLibrary.push(newBook);
};

function render() {
  let tableOfBooks = document.getElementById("books");
  tableOfBooks.innerHTML = "";
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

document.getElementById("submitNewBook").addEventListener("click", function() {
  addBookToLibrary();
  render();
  document.getElementById('form').style.display='none';
  document.getElementById('form').reset();
});

window.onclick = function(event) {
  if (event.target == form) {
    form.style.display = "none";
    document.getElementById('form').reset();
  }
}

/* document.getElementById("form").addEventListener('submit', function(event) { 
  event.preventDefault(); 
}); */

const knjiga1 = new Book('knjiga1', 'Sasa', 323, 2019, true);
const knjiga2 = new Book('knjiga2', 'Petar', 121, 2009, true);
const knjiga3 = new Book('knjiga3', 'Jovan', 50, 1990, false);

myLibrary.push(knjiga1,knjiga2,knjiga3);

render();


/* function handleForm(event) { 
  event.preventDefault(); 
}  */