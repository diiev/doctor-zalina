$('.about_edu_carousel').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint:1024, 
        settings: {
          arrows: false
        }
      }
    ]
  });

  $('.feedback_slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 767,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      }
    ]
  }); 

// accordion
$(document).ready(function(){
  $('.questions_accordion_item').click(function(event){
    $(this).toggleClass('active').next().slideToggle(400);
    $('.questions_accordion_item').not($(this)).removeClass('active');
    $('.accordion_item_content').not($(this).next()).slideUp(400);
  });
});

// Меню бургер 
const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
if (burger) {
  burger.addEventListener("click", function(e){
    burger.classList.toggle('active_burger');
    menu.classList.toggle('active_burger');
    document.body.classList.toggle('lock')
  })
}
// Прокрутка при клике 
const menuLinks = document.querySelectorAll('.menu__list a[data-goto]');

if (menuLinks.length > 0) {
  menuLinks.forEach(menuLinks=>{
    menuLinks.addEventListener("click", onMenuLinkClick);
  }); 
  function onMenuLinkClick (e) {
    const menuLink = e.target;
    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top+scrollY - document.querySelector('header').offsetHeight;
      // закрытие при нажатии 
      if (burger.classList.contains('active_burger')) {
          burger.classList.remove('active_burger');
          menu.classList.remove('active_burger');
          document.body.classList.remove('lock')
        }
     
      window:scrollTo({
        top:gotoBlockValue,
        behavior:"smooth"
      }); 
      e.preventDefault();
    }
  }
}