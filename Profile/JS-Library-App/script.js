const myLibrary = [];

function Book(Title, Author, Pages, Read) {
  this.Title = Title;
  this.Author = Author;
  this.Pages = Pages;
  this.Read = Read;
}


function addBookToLibrary(Title, Author, Pages, Read) {
  const newBook = new Book(Title, Author, Pages, Read);
  myLibrary.push(newBook);
  displayOnPage();
  console.log(myLibrary);
}


function displayOnPage() {
  const books = document.querySelector('.books');
  let bookIndex = 0;
  // Removes Array duplicates
  const rmvDup = document.querySelectorAll('.card');
  for (let i = 0; i < rmvDup.length; i++) {
    rmvDup[i].remove();
  }
  
  // Prints books on screen
  myLibrary.forEach((element) => {
    const cardCreate = document.createElement('div');
    cardCreate.classList.add('card');
    books.appendChild(cardCreate);

    for (const key in element) {
      const paragraph = document.createElement('p');
      cardCreate.appendChild(paragraph);
      paragraph.textContent = (`${key}: ${element[key]}`);
      console.log(`${key}: ${element[key]}`);
    }
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('deleteBtn')
    cardCreate.appendChild(deleteButton);

    deleteButton.textContent = 'DELETE';
    deleteButton.dataset.myLibrary = bookIndex;

    deleteButton.addEventListener('click', ()=>{
      deleteIndex = deleteButton.dataset.myLibrary
      deleteButton.parentElement.remove();
      myLibrary.splice(deleteIndex,1);
      console.log(myLibrary)
      

    });
  });
  bookIndex++;
}




function getBookInfo() {
  const T_itle = document.getElementById('Title')
  const Title = T_itle.value;
  const A_uthor = document.getElementById('Author')
  const Author = A_uthor.value;
  const P_ages = document.getElementById('Pages')
  const Pages = P_ages.value;
  const R_ead = document.getElementById('readit')
  const Read = R_ead.value;




  if (!T_itle.checkValidity()) {
  return document.getElementById("demo").innerHTML = T_itle.validationMessage;
  } 
  else if (!A_uthor.checkValidity()) {
  return  document.getElementById("demo").innerHTML = A_uthor.validationMessage;
  }
  else if (!P_ages.checkValidity()) {
  return  document.getElementById("demo").innerHTML = P_ages.validationMessage;
  }
  else if (!R_ead.checkValidity()) {
  
  return  document.getElementById("demo").innerHTML = R_ead.validationMessage;
  }


  console.log(Title, Author, Pages, Read);

  addBookToLibrary(Title, Author, Pages, Read);
  resetInput();
}

function resetInput() {
  const Title = document.getElementById('Title').value = '';
  const Author = document.getElementById('Author').value = '';
  const Pages = document.getElementById('Pages').value = '';
  const Read = document.getElementById('readit').value = '';
}














const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

openModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active');
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal');
    closeModal(modal);
  });
});

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add('active');
  overlay.classList.add('active');
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove('active');
  overlay.classList.remove('active');
}

/*  eslint linebreak-style: ["error", "windows"]*/
