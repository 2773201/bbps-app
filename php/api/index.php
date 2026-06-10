<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Access-Control-Allow-Headers: Content-Type');

require_once '../config.php';

// Parse request
$method = $_SERVER['REQUEST_METHOD'];
$path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$path = str_replace('/api', '', $path);

// Simple routing
if ($method === 'GET' && $path === '/operators') {
    echo json_encode([
        'status' => 'success',
        'data' => [
            ['id' => 1, 'name' => 'Airtel'],
            ['id' => 2, 'name' => 'Jio'],
            ['id' => 3, 'name' => 'Vodafone'],
            ['id' => 4, 'name' => 'Idea'],
        ]
    ]);
} else if ($method === 'POST' && $path === '/recharge') {
    $data = json_decode(file_get_contents('php://input'), true);
    
    echo json_encode([
        'status' => 'success',
        'message' => 'Recharge request received',
        'data' => $data
    ]);
} else {
    http_response_code(404);
    echo json_encode([
        'status' => 'error',
        'message' => 'Endpoint not found'
    ]);
}
?>