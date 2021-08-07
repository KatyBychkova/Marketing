$(function(){

  
  $('[data-fancybox]').fancybox({
    youtube : {
      controls : 1,
      showinfo : 1,
      autoplay : true
    },
  });
  
  
  $('.slider-blog__inner').slick({
    dots : true,
    prevArrow : '<button type="button" class="slick-prev"><img src="images/arrow-left.svg" alt="стрелка влево"></button>',
    nextArrow : '<button type="button" class="slick-next"><img src="images/arrow-right.svg" alt="стрелка вправо"></button>'
  });

  $('.menu__btn').on('click',function(){
    $('.header__top-inner').toggleClass('header__top-inner--active');
  });





  
  var mixer = mixitup('.portfolio__content', {
    animation: {
      duration: 300

  }});
 
});

