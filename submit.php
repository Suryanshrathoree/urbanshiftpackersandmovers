<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $captcha_input = $_POST['captcha_text'] ?? '';

    if ($captcha_input === $_SESSION['captcha_code']) {
        // CAPTCHA is correct – process form data
        echo "Form submitted successfully!";
    } else {
        // CAPTCHA is incorrect – redirect back or show error
        echo "Invalid CAPTCHA!";
    }
}
?>