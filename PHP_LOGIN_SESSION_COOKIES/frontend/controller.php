<?php
include 'db.php';
session_start();

$message = '';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if (isset($_POST['Register'])) {
        $name = $_POST['name'];
        $email = $_POST['Email'];
        $gender = $_POST['Gender'];
        $age = $_POST['Age'];

        $sql = "INSERT INTO user(user_name,email,Gender,Age) VALUES('$name','$email','$gender','$age')";

        if ($conn->query($sql) == true) {
            $message = "User Registered successfully";
        } else {
            $message = "Error while Registering!!";

        }
        header("Location: /php_login_session_cookies/frontend/index.php", urlendcode($message));


    } else if (isset($_POST['Login'])) {

       
        $id = $_POST['id'];


        $sql = "SELECT * FROM user WHERE user_id= '$id' ";
        $result = $conn->query($sql);



        if ($result->num_rows > 0) {

            $message = "Logged in successfully";
            $row = $result->fetch_assoc();
            $_SESSION['user_name'] = $row['user_name'];
            $_SESSION['email'] = $row['email'];
            $_SESSION['Gender'] = $row['Gender'];
            $_SESSION['Age'] = $row['Age'];

            $cookie_name = "login_status";
            $cookie_value = "logged in";
            setcookie($cookie_name, $cookie_value, time() + (86400 * 2), "/");

        } else {

            $message = "Error in login";


        }

        header("Location: home.php?message=" . urlencode($message));
    }

}













?>