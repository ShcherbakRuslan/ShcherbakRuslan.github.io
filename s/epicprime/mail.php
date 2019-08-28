<?php

$recepient = "info@bauhausx.media";
$sitename = "Bauhaus X Media";

if ($_POST['phone']!=''){
	die('Bots - no!');
  return false;
}
else{
  $name = trim($_POST["name"]);
	$email = trim($_POST["email"]);
	$text = trim($_POST["message"]);
	$message = "Email: $email \nName: $name \nMessage: $text";

	$pagetitle = "New message from \"$sitename\"";
	mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
}

