$('.player').mb_YTPlayer();

$('.link').click(function(){
	// console.log($(this).data('link'));

	$('body').addClass('off');

	if($(this).data('link')) {
		var l = $(this).data('link');
		$('#'+l).addClass('on');
	} else {
		console.log(0);
	}
});

$('.close').click(function(){
	$('.modal').removeClass('on');
	$('body').removeClass('off');
});

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

$(window).scroll(function() {
  if($(this).scrollTop() > $(window).height()) {
    $('.up_btn').addClass('on');
  } else {
    $('.up_btn').removeClass('on');
  }
});