<?php

$recepient = "connect@epicprime.agency";
$sitename = "Bauhaus-X.com";

// Additional headers
$headers[] = 'To: WebSee <info@websee.com>';
$headers[] = 'From: Bauhaus-X <bauhaus2@reliant.dreamhost.com>';
$headers[] = 'Cc: shcherbak@corp.websee.ru';
$headers[] = 'Bcc: kvashin@corp.websee.ru';


if ($_POST['phone2']!=''){
	die('No bots!');
  return false;
}
else{
  $first_name = trim($_POST["f_name"]);
	$last_name = trim($_POST["l_name"]);
	$company = trim($_POST["company"]);
	$email = trim($_POST["email"]);
	$phone = trim($_POST["phone"]);
	$party_partner = trim($_POST["party_partner"]);

	if($_POST["party_partner"] == 'ok') {
		$party_partner = 'yes';
	} else {
		$party_partner = 'no';
	}

	$message = "Registration form from $first_name $last_name \n\nPlease register me at bauhausx.com\n\nFirst name: $first_name \nLast name: $last_name \nCompany: $company \nE-mail (login): $email \nPhone: $phone \n3-d party partner: $party_partner";

	$pagetitle = "Registration on Bauhaus-X";
	mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient", implode("\r\n", $headers));
}

