<?php

// File used for storing connection count
$lock_file = 'connection_count.txt';

// Acquire lock (exclusive access to file)
$fp = fopen($lock_file, 'a+');
if (!$fp || !flock($fp, LOCK_EX | LOCK_NB)) {
    echo 'error'; // Indicate an error if lock cannot be acquired
    exit;
}

// Read current connection count
$count = (int)fgets($fp);

// Decrement connection count (assuming successful logout)
if ($count > 0) {
    fseek($fp, 0, SEEK_SET);
    ftruncate($fp, 0);
    fwrite($fp, strval($count - 1));

    echo $count-1;
}

// Release lock
flock($fp, LOCK_UN);
fclose($fp);

?>