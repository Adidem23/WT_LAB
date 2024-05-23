<?php

// Maximum allowed concurrent connections
$max_connections = 3;

// File used for storing connection count
$lock_file = 'connection_count.txt';

// Acquire lock (exclusive access to file)
$fp = fopen($lock_file, 'a+');
if (!$fp || !flock($fp, LOCK_EX | LOCK_NB)) {
    echo 'denied';
    fclose($fp);
    exit;
}

// Read current connection count (or create file if it doesn't exist)
$count = (int)fgets($fp);

// Check if limit is reached
if ($count >= $max_connections) {
    echo 'denied';
} else {
    // Increment connection count
    fseek($fp, 0, SEEK_SET);
    ftruncate($fp, 0);
    fwrite($fp, strval($count + 1));

    echo $count+1;
}

// Release lock
flock($fp, LOCK_UN);
fclose($fp);

?>