import { books, authors, genres, BOOKS_PER_PAGE } from "./data.js"

export class PreviewComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <dialog class="overlay" data-list-active>
        <div class="overlay__preview">
          <img class="overlay__blur" data-list-blur src="">
          <img class="overlay__image" data-list-image src="">
        </div>
        <div class="overlay__content">
          <h3 class="overlay__title" data-list-title></h3>
          <div class="overlay__data" data-list-subtitle></div>
          <p class="overlay__data overlay__data_secondary" data-list-description></p>
        </div>
        <div class="overlay__row">
          <button class="overlay__button overlay__button_primary" data-list-close>Close</button>
        </div>
      </dialog>
    `;
    this.activeBook = null;
  }

  connectedCallback() {
    this.addEventListener('click', this.showPreview);
    
  }

  disconnectedCallback() {
    this.removeEventListener('click', this.showPreview);
  }

  showPreview(event) {
   console.log("show preview")

    const pathArray = Array.from(event.path || event.composedPath());
    
    for (const node of pathArray) {
      console.log("path")
      if (node?.dataset?.preview) {
        const previewId = node.dataset.preview;
        const book = books.find((singleBook) => singleBook.id === previewId);

        if (book) {
          this.activeBook = book;
          this.updatePreview(book);
          break;
        }
      }
    }
  

  }

updatePreview(book) {
    console.log('update preview hello')
    this.shadowRoot.querySelector('[data-list-blur]').src = book.image;
    this.shadowRoot.querySelector('[data-list-image]').src = book.image;
    this.shadowRoot.querySelector('[data-list-title]').innerText = book.title;
    this.shadowRoot.querySelector('[data-list-subtitle]').innerText = `${authors[book.author]} (${new Date(book.published).getFullYear()})`;
    this.shadowRoot.querySelector('[data-list-description]').innerText = book.description;
    this.shadowRoot.querySelector('[data-list-active]').setAttribute('open', true)
  }
}

customElements.define('preview-component', PreviewComponent);
