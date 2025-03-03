import { CreditsCard } from "./scripts/components/CreditsCard.js";
import { CreditsSection } from "./scripts/components/CreditsSection.js";
import { initialCards } from "./scripts/utils/constants.js";
import Swiper from 'swiper';
import { Pagination } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/pagination';
import './pages/index.css'

const logo = document.querySelector('.header__icon'),
      menu = document.querySelector('.menu__img'),
      profile = document.querySelector('.profile'),
      hamburger = document.querySelector('.hamburger'),
      header = document.querySelector('.header'),
      title = document.querySelector('.order__title');

function createCredit({price, amount}){
  const credit = new CreditsCard({price, amount}, '.order__template-card').createCredit();
  return credit;
}

function startCountdown(durationInSeconds) {
  let timerElement = document.querySelector('.timer__time');
  let timeLeft = durationInSeconds;

  function updateTimerDisplay() {
      let hours = Math.floor(timeLeft/3600);
      let minutes = Math.floor(timeLeft / 60);
      let seconds = timeLeft % 60;
      timerElement.textContent = 
          (hours < 10 ? "0" : "") + hours + " : " +
          (minutes < 10 ? "0" : "") + minutes + " : " + 
          (seconds < 10 ? "0" : "") + seconds;
  }

  function tick() {
      if (timeLeft <= 0) {
        timeLeft = durationInSeconds; // Перезапуск таймера
      }
      updateTimerDisplay();
      timeLeft--;
      setTimeout(tick, 1000);
  }

  tick();
}

const cardSectionInstance = new CreditsSection({renderer: ({amount, price}) => {
  const cardElement = createCredit({amount, price});
  cardSectionInstance.addItem(cardElement);
}}, '.order__swiper-list');


cardSectionInstance.rendererItems(initialCards);

window.addEventListener('DOMContentLoaded', () => {
  hamburger.addEventListener('click', () => {
    header.classList.toggle('header_active');
    hamburger.classList.toggle('hamburger_active');
    profile.classList.toggle('profile_active');
    title.classList.toggle('order__title_active');
  });

  new Swiper('.swiper', {
    modules: [Pagination],
    pagination:{
      el: '.order__swiper-pagination',
      clickable: true
    },
    speed: 400,
    slidesPerView: "auto",
    width: 260,
    spaceBetween: 100,
    slidesPerView: 1,
    breakpoints: {
      768:{
        slidesPerView: 6,
        spaceBetween: 0,
        width: 150
      }
    }
  });

  if(window.innerWidth > 768){
    logo.src = './images/logo.svg';
    menu.src = './images/diamondL.svg';
  }else{
    logo.src = './images/diamond.svg';
    menu.src = './images/diamondM.svg'
  }

})

window.addEventListener('resize', ()=>{
  if(window.innerWidth > 768){
    logo.src = './images/logo.svg';
    menu.src = './images/diamondL.svg';
    header.classList.remove('header_active');
    hamburger.classList.remove('hamburger_active');
    profile.classList.remove('profile_active');
    title.classList.remove('order__title_active');
  }else {
    logo.src = './images/diamond.svg';
    menu.src = './images/diamondM.svg'
  }
})

window.onload = function () {
  startCountdown(10 * 60); // Запускаем таймер на 10 минут
};