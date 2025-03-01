export class CreditsSection{
  #renderer;
  #containerSelector;

  constructor({renderer}, containerSelector){
    this.#renderer = renderer;
    this.#containerSelector = document.querySelector(containerSelector);
  }

  addItem(element){
    this.#containerSelector.append(element);
  }

  rendererItems(items){
    items.forEach(e => {
      this.#renderer(e);
    });
  }
}