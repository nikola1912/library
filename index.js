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
    if (formElement.type == "text") { 
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

function checkFormValidation() {
  let radioTrigger = 0;
  let form = document.getElementById("form").elements;
  for (let formElement of form) {
    if (formElement.type == "text" || formElement.type == "number") {
      if (formElement.value == "") {
        return false;
      }
    } else if (formElement.type == "radio") {
      if (!formElement.checked) {
        radioTrigger += 1;
      }
    }
  } 
  if (radioTrigger == 2) {
    return false;
  }
  return true;
}

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
      if (key == "ifRead") {
        let ifReadButton = newRow.insertCell();
        let deleteButton = newRow.insertCell();
        if (book[key]) {
          ifReadButton.innerHTML = '<button class="readButton"></button>';
        } else {
          ifReadButton.innerHTML = '<button class="notReadButton"></button>';
        }
        deleteButton.innerHTML = '<button class="delete"></button>'
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
  if (checkFormValidation()) {
    addBookToLibrary();
    render();
    document.getElementById('form').reset();
    document.getElementById('form').style.display='none';
  } else {
    alert("Fill out all the information");
  }
});

document.getElementById("books").addEventListener("click", function(e){
  if (/readButton|notReadButton/.test(e.target.className)) {
    e.target.classList.toggle("readButton"); 
    e.target.classList.toggle("notReadButton");
  }
});

window.onclick = function(event) {
  if (event.target == form) {
    form.style.display = "none";
    document.getElementById('form').reset();
  }
}

const knjiga1 = new Book('Kad su cvetale tikve', 'Dragoslav Mihailovic', 183, 1968, true);
const knjiga2 = new Book('Seobe', 'Milos Crnjanski', 288, 1929, true);
const knjiga3 = new Book('Na Drini cuprija', 'Ivo Andric', 318, 1945, false);

myLibrary.push(knjiga1,knjiga2,knjiga3);

render();