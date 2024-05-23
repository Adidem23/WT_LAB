<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve units from the form
    $units = $_POST["units"];

    // Calculate the electricity bill
    $bill = 0;
    if ($units <= 50) {
        $bill = $units * 3.50;
    } elseif ($units <= 150) {
        $bill = 50 * 3.50 + ($units - 50) * 4.00;
    } elseif ($units <= 250) {
        $bill = 50 * 3.50 + 100 * 4.00 + ($units - 150) * 5.20;
    } else {
        $bill = 50 * 3.50 + 100 * 4.00 + 100 * 5.20 + ($units - 250) * 6.50;
    }

    // Display the bill amount
    echo "<div class='container'>";
    echo "<h2>Your Electricity Bill</h2>";
    echo "<p>Units Consumed: $units</p>";
    echo "<p>Total Amount: Rs. $bill</p>";
    echo "</div>";
}
?>
