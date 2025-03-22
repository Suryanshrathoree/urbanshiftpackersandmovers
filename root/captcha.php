<?php
session_start();

$captcha_code = substr(str_shuffle("0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"), 0, 6);
$_SESSION['captcha_code'] = $captcha_code;

$width = 120;
$height = 40;
$image = imagecreate($width, $height);

$background_color = imagecolorallocate($image, 255, 255, 255);
$text_color = imagecolorallocate($image, 0, 0, 0);
$line_color = imagecolorallocate($image, 64, 64, 64);
$pixel_color = imagecolorallocate($image, 128, 128, 128);

imagefill($image, 0, 0, $background_color);

for ($i = 0; $i < 6; $i++) {
    imagettftext($image, 20, rand(-10, 10), 15 + ($i * 20), 30, $text_color, __DIR__ . '/arial.ttf', $captcha_code[$i]);
}

for ($i = 0; $i < 5; $i++) {
    imageline($image, rand(0, $width), rand(0, $height), rand(0, $width), rand(0, $height), $line_color);
}

for ($i = 0; $i < 100; $i++) {
    imagesetpixel($image, rand(0, $width), rand(0, $height), $pixel_color);
}

header("Content-type: image/png");
imagepng($image);
imagedestroy($image);
