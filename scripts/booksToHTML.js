const list = document.getElementById('list');
/* eslint-disable no-undef */
const toast = Swal.mixin({
  toast: true,
  icon: 'success',
  title: 'General Title',
  animation: false,
  position: 'top-right',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
});

const addingBookToHtml = (Title, Author, index, books, remove) => {
  const div = document.createElement('div');
  const span = document.createElement('span');
  div.className = 'listItem';
  div.setAttribute('id', index);
  const title = document.createElement('p');
  title.innerHTML = Title;
  title.className = 'title';
  const author = document.createElement('p');
  author.innerHTML = Author;
  author.className = 'author';
  span.appendChild(title);
  span.appendChild(author);
  const button = document.createElement('button');
  button.innerHTML = 'Remove';
  button.className = 'RemoveButton';
  button.setAttribute('id', 'removeButton');
  button.addEventListener('click', ((e) => {
    const parent = e.target.parentElement;
    const index = parent.id;
    remove(index);
    /* eslint-disable no-use-before-define */
    addAllBooks(books, remove);
    localStorage.books = JSON.stringify(books);
    toast.fire({
      animation: true,
      title: 'Book Removed',
    });
  }));
  div.appendChild(span);
  div.appendChild(button);
  list.appendChild(div);
};

const addAllBooks = (books, remove) => {
  list.innerHTML = '';
  books.forEach((book, index) => {
    addingBookToHtml(book.title, book.author, index, books, remove);
  });
};

export default addAllBooks;