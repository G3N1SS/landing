export class CreditsCard{
  #price;
  #credits;
  #newProduct;
  #productPrice;
  #productCredits;

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
  }
  createCredit = () => {
    this.#productPrice.textContent = '/ $' + this.#price;
    this.#productCredits.textContent = this.#credits + ' ';
    return this.#newProduct;
  }
}