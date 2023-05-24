<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
  // Get form data
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];

  // Validate form data (you can add more validation as needed)

  if (empty($name) || empty($email) || empty($message)) {
    // Handle form validation errors
    echo "Please fill out all the fields.";
    exit;
  }

  // Set up email content
  $to = "patrykmarp@gmail.com";
  $subject = "New message from contact form";
  $emailBody = "Name: $name\n";
  $emailBody .= "Email: $email\n";
  $emailBody .= "Message:\n$message";

  // Send the email
  $headers = "From: $email\r\n";
  if (mail($to, $subject, $emailBody, $headers)) {
    // Email sent successfully
    echo "Message sent. Thank you!";
  } else {
    // Error sending email
    echo "Sorry, there was an error sending your message. Please try again later.";
  }
}
?>
