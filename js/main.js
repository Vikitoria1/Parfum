const btn = document.querySelector('.menu-btn');
const nav = document.querySelector('.header__inner');

btn.addEventListener('click', ()=> {
    nav.classList.toggle('menu-open');
});

document.querySelectorAll('.answers__triger').forEach((item) =>{
item.addEventListener('click', () => {
    item.parentNode.classList.toggle('answers__item-active')
  })
});

