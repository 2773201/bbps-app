<?php
// BBPS App Configuration

// Database Configuration
define('DB_HOST', 'localhost');
define('DB_USER', 'root');
define('DB_PASS', '');
define('DB_NAME', 'bbps_db');

// API Configuration
define('API_URL', 'http://localhost:8080');
define('API_VERSION', 'v1');

// Allowed Origins for CORS
define('ALLOWED_ORIGINS', array(
    'http://localhost:8080',
    'http://127.0.0.1:8080',
));

// Error Reporting
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Set timezone
date_default_timezone_set('Asia/Kolkata');
?>