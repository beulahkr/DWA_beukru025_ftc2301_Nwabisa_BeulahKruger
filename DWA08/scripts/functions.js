import { books, authors, genres, BOOKS_PER_PAGE } from "./data.js"

export function createPreview(books, authors) {
  return function createPreviewHandler(event) {
    const pathArray = Array.from(event.path || event.composedPath());

    let active = null;

    for (const node of pathArray) {
      if (active) break;

      if (node?.dataset?.preview) {
        let result = null;

        for (const singleBook of books) {
          if (result) break;
          if (singleBook.id === node?.dataset?.preview) result = singleBook;
        }

        active = result;
      }
    }

    if (active) {
      document.querySelector('[data-list-active]').open = true;
      document.querySelector('[data-list-blur]').src = active.image;
      document.querySelector('[data-list-image]').src = active.image;
      document.querySelector('[data-list-title]').innerText = active.title;
      document.querySelector('[data-list-subtitle]').innerText = `${authors[active.author]} (${new Date(
        active.published
      ).getFullYear()})`;
      document.querySelector('[data-list-description]').innerText = active.description;
    }
  };
}
