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

let accordion_items = document.querySelectorAll('.questions_accordion');
for (i = 0; i <accordion_items.length; i++) {
    let thisItems = accordion_items[i];
    thisItems.addEventListener('click', function(){
      thisItems.classList.toggle('active');
    })
}
