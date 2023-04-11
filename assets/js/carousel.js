const carousel = document.querySelector('.carousel');
const cards = document.querySelectorAll('.card');

let currentCard = 0;
let startX;
let endX;

carousel.addEventListener('mousedown', e => {
  startX = e.clientX;
});

carousel.addEventListener('mouseup', e => {
  endX = e.clientX;
  if (startX < endX) {
    if (currentCard !== 0) {
      currentCard--;
      carousel.scrollTo({
        left: cards[currentCard].offsetLeft,
        behavior: 'smooth'
      });
    }
  } else if (startX > endX) {
    if (currentCard !== cards.length - 1) {
      currentCard++;
      carousel.scrollTo({
        left: cards[currentCard].offsetLeft,
        behavior: 'smooth'
      });
    }
  }
});
