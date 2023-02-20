// --------------------- Imports --------------------

import { DateTime } from './luxon.js';
import Books from './booksClass.js';
import addAllBooks from './booksToHTML.js';
import './SPANavigations.js';

// -------------------- Variables --------------------

const form = document.getElementById('form');
const title = document.getElementById('title');
const author = document.getElementById('author');
const time = document.getElementById('time');

/* eslint-disable no-undef */
const toast = Swal.mixin({
  toast: true,
  icon: 'success',
  title: 'General Title',
  position: 'top-right',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
});

const colection = new Books();

// -------------------- functions --------------------

const remove = (index) => {
  colection.remove(index);
};

const addBook = () => {
  colection.add(title.value, author.value);
  addAllBooks(colection.books, remove);
  title.value = '';
  author.value = '';
  const books = colection.books.filter((book) => book.title !== '');
  localStorage.books = JSON.stringify(books);
  toast.fire({
    title: 'Book Added',
  });
};

const currentTime = () => {
  const now = DateTime.now();
  return now.toLocaleString({ ...DateTime.DATETIME_MED_WITH_SECONDS, hour12: true });
};

// ----------------- Event listners --------------------

form.addEventListener('submit', (event) => {
  event.preventDefault();
  addBook();
});

window.addEventListener('DOMContentLoaded', () => {
  time.innerHTML = currentTime();
  if (localStorage.books) {
    colection.books = JSON.parse(localStorage.books);
    addAllBooks(colection.books, remove);
  }
});

// ---------------- Set time ---------------

setInterval(() => {
  time.innerHTML = currentTime();
}, [1000]);