import { CreditsCard } from "./components/CreditsCard.js";
import { CreditsSection } from "./components/CreditsSection.js";
import { initialCards } from "./utils/constants.js";

function createCredit({price, amount}){
  const credit = new CreditsCard({price, amount}, '.order__template-card').createCredit();
  return credit;
}

const cardSectionInstance = new CreditsSection({renderer: ({amount, price}) => {
  console.log(amount)
  const cardElement = createCredit({amount, price});
  cardSectionInstance.addItem(cardElement);
}}, '.order__swiper-list');

console.log('hello');
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination:{
    el: '.swiper-pagination',
    clickable: true,
  },
  speed: 400,
  spaceBetween: 100,
  width: 260,
});

cardSectionInstance.rendererItems(initialCards)