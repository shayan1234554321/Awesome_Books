export default class Books {
  constructor() {
    this.books = [];
  }

  add(title, author) {
    this.books.push({ title, author });
  }

  remove(index) {
    this.books.splice(index, 1);
  }
}