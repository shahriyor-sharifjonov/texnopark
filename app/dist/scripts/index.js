"use strict";
const headerButton =
  document.querySelector(".intro__button");
const headerMenu = document.querySelector(".sidebar");
let menuOpened = false;
const menuToggle = () => {
  menuOpened = !menuOpened;
  headerButton.classList.toggle("open");
  headerMenu.classList.toggle("open");
};

headerButton.onclick = menuToggle;

window.onclick = (e) => {
  if (
    menuOpened &&
    !e.composedPath().includes(headerButton) &&
    !e.composedPath().includes(headerMenu)
  )
    menuToggle();
};


$('.advantages__carousel').slick({
  // infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1800,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 583,
      settings: {
        slidesToShow: 1,
      }
    },
  ]
});
		
$('.reviews__carousel').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      }
    },
  ]
});
		

window.addEventListener('click', function(e){
  if(e.target.classList.contains('sidebar__filter-btn')){
    e.target.classList.toggle('active');
    checkBtn()
    document.querySelector('.sidebar__filter-hidden').classList.toggle('active')
  }
})

function checkBtn(){
  let btn = document.querySelector('.sidebar__filter-btn');
  if(btn.classList.contains('active')){
    btn.innerHTML = 'Закрыть'
  }else{
    btn.innerHTML = 'Смотреть все'
  }
}