
  $(document).ready(function(){
    $('.course-cards').slick({
      autoplay: true,
      arrows: true,  
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      adaptiveHeight: true,
      prevArrow: `<div class="preve-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg></div>`,
      nextArrow: `<div class="next-arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg></div>`
    });

    $('.testimonial-carousel').slick({
      autoplay: true,
      dots: true,  
      arrows:false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true,
    });

    $('.blogs-cards').slick({
      autoplay: true,
      dots: true,  
      arrows:false,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      adaptiveHeight: true,
    });


  });
