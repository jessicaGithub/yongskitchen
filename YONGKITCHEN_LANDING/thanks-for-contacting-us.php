<?php
/**
 * This example shows settings to use when sending via Google's Gmail servers.
 */

//SMTP needs accurate times, and the PHP time zone MUST be set
//This should be done in your php.ini, but this is how to do it if you don't have access to that
date_default_timezone_set('Etc/UTC');

require "PHPMailerAutoload.php";

// GET PARAM VALUES
    $name = htmlspecialchars($_GET["Name"]);
    $email = htmlspecialchars($_GET["Email"]);
    $msg = htmlspecialchars($_GET["Message"]);

//Create a new PHPMailer instance
$mail = new PHPMailer;

// $mail->isSMTP();
$mail->SMTPAuth = true;
//Enable SMTP debugging
// 0 = off (for production use)
// 1 = client messages
// 2 = client and server messages
$mail->SMTPDebug = 0;
//Ask for HTML-friendly debug output
$mail->Debugoutput = 'html';
//Set the hostname of the mail server
$mail->Host = "mail.yongskitchen.com.au";
//Set the SMTP port number - likely to be 25, 465 or 587
$mail->Port = 25;
//Whether to use SMTP authentication
$mail->SMTPAuth = true;
//Username to use for SMTP authentication
$mail->Username = "enquiries@yongskitchen.com.au";
//Password to use for SMTP authentication
$mail->Password = "gostja123";

//Set who the message is to be sent from
$mail->setFrom($email, $name);
//Set an alternative reply-to address
$mail->addReplyTo($email, $name);
//Set who the message is to be sent to
$mail->addAddress('enquiries@yongskitchen.com.au', 'Jooyong Jeong');
$mail->AddCC('himechi90@gmail.com', 'Jessica Jeong');
$mail->AddCC('jooyong1985@gmail.com', 'Jooyong Jeong');
//Set the subject line
$mail->Subject = "Yong's Kitchen Website Enquiry";
//Read an HTML message body from an external file, convert referenced images to embedded,
//convert HTML into a basic plain-text alternative body
$mail->msgHTML($msg);
//Replace the plain text body with one created manually
$mail->AltBody = $msg;
//Attach an image file
// $mail->addAttachment('images/phpmailer_mini.png');

//send the message, check for errors
if (!$mail->send()) {
    // echo "Mailer Error: " . $mail->ErrorInfo;
    echo "<p>Ooops! We seem to be having a technical issue.</p><p>Please email enquiries@yongskitchen.com.au for enquiries :)</p>";
} else {
     echo "<p>Thank you for your enquiry!</p><p>We will try to respond within 2 working days.</p><p>Have a nice day!</p>";
}


?>