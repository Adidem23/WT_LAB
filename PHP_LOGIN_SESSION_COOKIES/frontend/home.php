<?php
include 'db.php';
session_start();

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dog blog</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css
" rel="stylesheet" />
    <link rel="stylesheet" type="text/css" href="index.css">
    <style>
        .home-container {
            background: aliceblue;
        }

        ul {
            list-style: none;
            margin-top: 15px;

            font-size: large;
        }

        li {
            margin-top: 30px;
        }

        .btn {
            margin-top: 15px;
            margin-left: 15px;
            background-color: black;
            color: white;
        }
    </style>
</head>

<body>



    <?php



    if (isset($_COOKIE['login_status']) && $_COOKIE['login_status'] == "logged in") {
        $username = $_SESSION['user_name'];
        $email = $_SESSION['email'];
        $Gender = $_SESSION['Gender'];
        $Age = $_SESSION['Age'];


        ?>

        <div class='home-container'>
            <ul>
                <li>Name : <?php echo "$username" ?></li>
                <li>Email: <?php echo "$email" ?></li>
                <li>Age : <?php echo "$Age" ?></li>
                <li>Gender : <?php echo "$Gender" ?></li>
            </ul>
        </div>


        <?php


    }

    if (isset($_GET['message'])) { ?>
        <script>alert('<?php echo $_GET['message'] ?>')</script>
        <?php
    }
    ?>

    <button class="btn" onClick="logout()">Logout</button>


    <script>
        function logout() {


            window.location.href = "logout.php";

        }

    </script>


    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>

</body>

</html>