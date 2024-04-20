<?php
if (empty($_POST['name']) || empty($_POST['subject']) || empty($_POST['message']) || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
    http_response_code(400); // Changed HTTP response code to 400 for bad request
    exit();
}

$name = htmlspecialchars($_POST['name']);
$email = htmlspecialchars($_POST['email']);
$m_subject = htmlspecialchars($_POST['subject']);
$message = htmlspecialchars($_POST['message']);

$to = "jaysudhirgiram@gmail.com"; // Corrected email address
$subject = "$m_subject: $name";
$body = "You have received a new message from your website contact form.\n\n" .
        "Here are the details:\n\nName: $name\n\nEmail: $email\n\nSubject: $m_subject\n\nMessage: $message";
$header = "From: $email\r\n" .
          "Reply-To: $email\r\n" .
          "Content-Type: text/plain; charset=UTF-8\r\n"; // Added Content-Type header

if (!mail($to, $subject, $body, $header)) {
    http_response_code(500);
    exit();
}
?>

