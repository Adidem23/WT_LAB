<?php
session_start();

// Initialize the session array if not already set
if (!isset($_SESSION['students'])) {
    $_SESSION['students'] = [];
}

// Handle form submission to add a new student
if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['add_student'])) {
    $name = htmlspecialchars($_POST['name']);
    $roll_no = htmlspecialchars($_POST['roll_no']);
    $marks = htmlspecialchars($_POST['marks']);
    $_SESSION['students'][] = [
        'name' => $name,
        'roll_no' => $roll_no,
        'marks' => $marks
    ];
}

// Handle deletion of a student
if (isset($_GET['delete'])) {
    $index = intval($_GET['delete']);
    if (isset($_SESSION['students'][$index])) {
        array_splice($_SESSION['students'], $index, 1);
    }
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Management</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Student Management</h1>
        
        <form method="POST" action="">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required>
            
            <label for="roll_no">Roll No:</label>
            <input type="text" id="roll_no" name="roll_no" required>
            
            <label for="marks">Marks:</label>
            <input type="number" id="marks" name="marks" required>
            
            <button type="submit" name="add_student">Add Student</button>
        </form>
        
        <h2>Student List</h2>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Roll No</th>
                    <th>Marks</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <?php foreach ($_SESSION['students'] as $index => $student): ?>
                    <tr>
                        <td><?php echo $student['name']; ?></td>
                        <td><?php echo $student['roll_no']; ?></td>
                        <td><?php echo $student['marks']; ?></td>
                        <td>
                            <a href="?delete=<?php echo $index; ?>" class="delete-btn" onclick="return confirm('Are you sure you want to delete this student?');">Delete</a>
                        </td>
                    </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
    </div>
</body>
</html>
