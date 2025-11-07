const Rouge = document.querySelector('#a-mettre-en-rouge');
Rouge.style.color = 'red';

const BoutonRouge = document.querySelector('#en-rouge-suite-a-click');
BoutonRouge.addEventListener('click', () => {
    BoutonRouge.style.color = 'red';
    });

const Lesh2 = document.querySelectorAll('h2');
Lesh2.forEach((elem) => {
  elem.addEventListener('click', (evt) => {
    evt.target.style.color = 'red';
  });
});