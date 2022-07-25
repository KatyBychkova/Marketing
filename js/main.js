$(function(){

  $(".menu a, .header__content__inner a, .go-top").on("click", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});

  
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
    nextArrow : '<button type="button" class="slick-next"><img src="images/arrow-right.svg" alt="стрелка вправо"></button>',
    responsive: [
      {
        breakpoint: 769,
        settings: {
           arrows: false,
        }
      }
    ]
  });

  $('.menu__btn, .menu a').on('click',function(){
    $('.header__top-inner').toggleClass('header__top-inner--active');
  });





  
  var mixer = mixitup('.portfolio__content', {
    animation: {
      duration: 300

  }});
 
});

