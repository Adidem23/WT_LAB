<!DOCTYPE html>
<html lang="en">
<link>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Php login and session</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css
" rel="stylesheet" />
<link rel="stylesheet" href="index.css">
</head>

<body>
    <div class="row">
        <div class="container">
            <form action="controller.php" method="POST">
                <h1>Register</h1>
                <div class="row">
                    <div class="col">
                        <label for="name" class="form-label">Name</label>
                        <input type="text" id="name" name="name" placeholder="Enter name" />
                    </div>
                    <div class="col">
                        <label for="Email" class="form-label">Email</label>
                        <input type="email" id="Email" name="Email" placeholder="Enter Email" />
                    </div>

                </div>
                <div class="row">
                    <div class="col">
                        <label for="Gender" class="form-label">Gender</label>
                        <select id="Gender" name="Gender">
                            <option value="" selected disabled>Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div class="col">
                        <label for="Age" class="form-label">Age</label>
                        <input type="number" id="Age" name="Age" placeholder="Enter Age" />
                    </div>

                </div>
                <button class="btn" name="Register">Register</button>
            </form>

        </div>
        <div class="container">

            <h1>Login</h1>

            <form action="controller.php" method="POST">
                <div class="row">
                    <div class="col">

                        <label for="id" class="form-label">Id</label>
                        <input type="number" id="id" name="id" placeholder="Enter id" />
                    </div>


                </div>
                <button class="btn" name="Login">Login</button>
            </form>

        </div>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
        <?php if (isset($_GET['message'])) { ?>

            <script>alert('<?php echo $_GET['message'] ?>')</script>
        <?php
        }
        ?>
</body>

</html>