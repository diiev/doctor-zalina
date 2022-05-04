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

// burger
$(document).ready(function(){
  $('.burger').click(function(event){
    $('.burger, .menu').toggleClass('active_burger');
    $('body').toggleClass('lock') 
  });
 
  }); 