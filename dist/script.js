const mainContent = document.querySelector('#main-content');
const dropper = document.querySelectorAll('.dropper');
const dropperContent = document.querySelectorAll('.dropper-content');
const plusIcons = document.querySelectorAll('.plusIcon');
const minusIcons = document.querySelectorAll('.minusIcon');

dropper.forEach((drop, index) => {
  drop.addEventListener('click', () => {
    dropperContent[index].classList.toggle('hidden');
    plusIcons[index].classList.toggle('hidden');
    minusIcons[index].classList.toggle('hidden');
  });
});
