/* Скролл по блокам */
$(document).ready(function() {
  $("a.scrollto").click(function() {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 800);
    return false;
  });
});
/* ================ */

/* Кнопка "На верх" */
$(window).scroll(function() {
  if($(this).scrollTop() > $(window).height()) {
    $('.up_btn').addClass('on');
  } else {
    $('.up_btn').removeClass('on');
  }
});
/* ================ */

/* Слайдер */
const $slickElement = $('.screen_work__slider');

$slickElement.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
  const page = Math.ceil(((currentSlide || 0) + 1) / 1),
    		numPages = Math.ceil(slick.slideCount / 1);

  $('.screen_work__slider_nav__wrap .screen_work__slider_num', slick.$slider.parent()).text(`${page} / ${numPages}`);
});

$slickElement.slick({
  // dots: true,
  arrows : false,
  infinite: true,
  speed: 800,
  slidesToShow: 1,
  centerMode: true,
  variableWidth: true
});
// $slickElement.on('afterChange', function(event, slick, currentSlide){
//   $("#change").text(currentSlide + 1);
// });
$slickElement.parent().find('.screen_work__slider_nav__wrap .arrow_next').click(function() {
  $slickElement.slick('slickNext');			   
});
$slickElement.parent().find('.screen_work__slider_nav__wrap .arrow_prev').click(function() {
  $slickElement.slick('slickPrev');
});
/* ================ */

$(document).foundation()
