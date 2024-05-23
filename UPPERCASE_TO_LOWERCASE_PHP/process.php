<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the input text
    $inputText = $_POST['inputText'];

    // Convert the text to lowercase
    $lowercaseText = strtolower($inputText);

    // Make the first character of each word uppercase
    $transformedText = ucwords($lowercaseText);

    // Display the transformed text
    echo "<h1>Transformed Text</h1>";
    echo "<p>$transformedText</p>";
}
?>
