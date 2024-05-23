<?php
    $name = "root";
    $password = "1234";
    $server = "localhost";
    $db = "complaint";

    // Connection
    $conn = mysqli_connect($server, $name, $password, $db);
    if(!$conn){
        echo "Connection Failed";
    }

?>
