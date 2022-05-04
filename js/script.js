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
  // аккордион на js
// let accordion_items = document.querySelectorAll('.questions_accordion');
// for (i = 0; i <accordion_items.length; i++) {
//     let thisItems = accordion_items[i];
//     let nextItems=accordion_items[i+1];
//     thisItems.addEventListener('click', function(){
//       thisItems.classList.toggle('active'); 
//     }) 
//     nextItems.addEventListener('click', function () {
//       thisItems.classList.remove('active');
//    })
// } 
// аккордион на jquery
$(document).ready(function(){
  $('.questions_accordion_item').click(function(event){
    $(this).toggleClass('active').next().slideToggle(400);
    $('.questions_accordion_item').not($(this)).removeClass('active');
    $('.accordion_item_content').not($(this).next()).slideUp(400);
  });
});
$(document).ready(function(){
  $('.burger').click(function(event){
    $('.burger, .menu').toggleClass('active_burger');
    $('body').toggleClass('lock') 
  });
 
  }); 
  $(document).ready(function(){
    $('.menu__list a').click(function(event){
      $('.burger, .menu').remove('active_burger');
      $('body').remove('lock') 
    });
   
    }); 
 
 const menu_burger = document.querySelector('.burger');
 const menu = document.querySelector('.menu')
 if (menu_burger.classList.contains('.active_burger')) { 
   document.body.classList.remove('.lock');
   menu_burger.classList.remove('.active_burger');
   menu.classList.remove('.active_burger');

 }