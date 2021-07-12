<?php 
$errors = '';
$myemail = 'mattmcal88@gmail.com';//<-----Put Your email address here.

//Sever-side validation check:
//if one or both fields are empty, an error message will pop up for the client to see
if(empty($_POST['Record Name'])  || 
   empty($_POST['Band Name']) ||
   empty($_POST['email']) 
{
    $errors .= "\n Error: all fields are required";
}

$recordName = $_POST['Record Name']; 
$bandName = $_POST['Band Name'];  
$emailAddress = $_POST['email'];

if (!preg_match( //checks to see that the email address is valid, if not, an error message will pop up
"/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i", 
$emailAddress))
{
    $errors .= "\n Error: Invalid email address";
}
    
if(empty($errors))
{
	$to = $myemail; 
	$email_subject = "Record Review Request";
	$email_body = "You have received a new record review request.".
	" Here are the details:\n Record Name: $recordName \n Band Name: $bandName"; 
	
	$headers = "From: $myemail\n"; 
	$headers .= "Reply-To: $emailAddress";
	
	mail($to,$email_subject,$email_body,$headers); //there is an error occuring when the mail function executes
    //sendmail application may need to be downloaded
	//There may be a better way for me to see the review requests for this website

    header('Location: /ThankYou');
} 
?>
