const bookList = document.getElementById('bookList');
const addNewForm = document.getElementById('addNewForm');
const contactForm = document.getElementById('contactForm');

const listLink = document.getElementById('listLink');
const addNewLink = document.getElementById('addNewLink');
const contactLink = document.getElementById('contactLink');

listLink.addEventListener('click', () => {
  bookList.classList.remove('display-none');
  addNewForm.classList.add('display-none');
  contactForm.classList.add('display-none');
  listLink.classList.add('listSelected');
  addNewLink.classList.remove('addNewSelected');
  contactLink.classList.remove('contactSelected');
});
addNewLink.addEventListener('click', () => {
  bookList.classList.add('display-none');
  addNewForm.classList.remove('display-none');
  contactForm.classList.add('display-none');
  listLink.classList.remove('listSelected');
  addNewLink.classList.add('addNewSelected');
  contactLink.classList.remove('contactSelected');
});
contactLink.addEventListener('click', () => {
  bookList.classList.add('display-none');
  addNewForm.classList.add('display-none');
  contactForm.classList.remove('display-none');
  listLink.classList.remove('listSelected');
  addNewLink.classList.remove('addNewSelected');
  contactLink.classList.add('contactSelected');
});