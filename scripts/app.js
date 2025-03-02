import { CreditsCard } from "./components/CreditsCard.js";
import { CreditsSection } from "./components/CreditsSection.js";
import { initialCards } from "./utils/constants.js";

const logo = document.querySelector('.header__icon');

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
  pagination:{
    el: '.swiper-pagination',
    clickable: true,
  },
  speed: 400,
  slidesPerView: "auto",
  width: 200,
  spaceBetween: 100,
  breakpoints: {
    768:{
      slidesPerView: 1,
      spaceBetween: 0,
      width: 150
    }
  }
});

cardSectionInstance.rendererItems(initialCards);

window.addEventListener('DOMContentLoaded', () => {
  const profile = document.querySelector('.profile'),
        hamburger = document.querySelector('.hamburger'),
        header = document.querySelector('.header'),
        title = document.querySelector('.order__title');

  hamburger.addEventListener('click', () => {
    header.classList.toggle('header_active');
    hamburger.classList.toggle('hamburger_active');
    profile.classList.toggle('profile_active');
    title.classList.toggle('order__title_active');
  });

  if(window.innerWidth > 768){
    logo.src = './images/logo.svg';
  }else{
    logo.src = './images/diamond.svg';
  }

})

window.addEventListener('resize', ()=>{
  if(window.innerWidth > 768){
    logo.src = './images/logo.svg';
  }else {
    logo.src = './images/diamond.svg';
  }
})