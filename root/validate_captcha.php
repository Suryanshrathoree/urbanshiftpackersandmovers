<?php
session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $captcha_input = $_POST['captcha_text'] ?? '';

    if (isset($_SESSION['captcha_code']) && $captcha_input === $_SESSION['captcha_code']) {
        echo 'success'; // CAPTCHA is correct
    } else {
        echo 'error'; // CAPTCHA is incorrect
    }
}
