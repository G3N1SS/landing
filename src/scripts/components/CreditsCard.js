export class CreditsCard{
  #price;
  #credits;
  #newProduct;
  #productPrice;
  #productCredits;
  #productButton;

  constructor({price, amount}, templateSelector){
    console.log(price);
    console.log(amount)
    this.#price = price;
    this.#credits = amount;
    this.#newProduct = document
      .querySelector(templateSelector)
      .content.querySelector(".order__swiper-item")
      .cloneNode(true);
    this.#productPrice = this.#newProduct.querySelector('.order__swiper-price');
    this.#productCredits = this.#newProduct.querySelector('.order__swiper-credits');
    this.#productButton = this.#newProduct.querySelector('.order__swiper-button')
  }
  createCredit = () => {
    this.#productPrice.textContent = '/ $' + this.#price;
    this.#productCredits.textContent = this.#credits + ' ';
    this.#newProduct.addEventListener('mouseenter', () => {
      this.#productButton.classList.add('order__swiper-button_hover')
    })
    this.#newProduct.addEventListener('mouseleave', () => {
      this.#productButton.classList.remove('order__swiper-button_hover')
    })
    return this.#newProduct;
  }
}