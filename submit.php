<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

$name          = trim($_POST['name'] ?? '');
$mobile        = trim($_POST['mobile'] ?? '');
$email         = trim($_POST['email'] ?? '');
$shifting_type = trim($_POST['shifting_type'] ?? '');
$from          = trim($_POST['from'] ?? '');
$to            = trim($_POST['to'] ?? '');

if (!$name || !$mobile || !$email || !$from || !$to) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Please fill all required fields']);
    exit;
}

$entry = [
    'name'          => $name,
    'mobile'        => $mobile,
    'email'         => $email,
    'shifting_type' => $shifting_type,
    'from'          => $from,
    'to'            => $to,
    'submitted_at'  => date('Y-m-d H:i:s'),
];

$file      = __DIR__ . '/enquiries.json';
$enquiries = [];

if (file_exists($file)) {
    $enquiries = json_decode(file_get_contents($file), true) ?: [];
}

$enquiries[] = $entry;
file_put_contents($file, json_encode($enquiries, JSON_PRETTY_PRINT));

echo json_encode(['success' => true, 'message' => 'Enquiry submitted successfully']);
