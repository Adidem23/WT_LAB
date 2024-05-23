<?php

$servername = 'localhost';
$username = 'root';
$password = 1234;
$dbname = 'phpdb';

$conn = mysqli_connect($servername, $username, $password, $dbname);

if ($conn) {
    ?>
    <script>console.log("connected successfully")</script>
    <?php
   
} else {
    ?>
    <script>console.log("connection failed")</script>
    <?php
    //   header("location:  /php_login_session_cookies/frontend/index.php");
}


?>