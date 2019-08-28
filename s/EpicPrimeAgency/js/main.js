$(function() {

	$('.modal_close').click(function(){
		$('.modal').removeClass('on').addClass('off');
	});

	$('.link_modal').click(function(event){
		$('.modal').removeClass('off').addClass('on');
	})

	$("#formRegister").submit(function() {
    $.ajax({
      type: "POST",
      url: "../mailSignUp.php",
      data: $(this).serialize()
    }).done(function() {
      $(this).find("input").val("");
      alert("Thank you for registration at Bauhaus X!");
      $("#formSignUp").trigger("reset");
      $(location).attr('href',window.location.origin);
    });
    return false;
  });

});