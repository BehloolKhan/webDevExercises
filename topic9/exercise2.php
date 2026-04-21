<?php 

$servername = "127.0.0.1";
$username = "root";
$password = "";
$dbname = "ecs417";

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php

        //create connection
        //
        $conn = new mysqli($servername, $username, $password, $dbname);

        //checks connection
        if ($conn->connect_error) {
            die("Connection failed: ".$conn->connect_error);
        }

        else {
            if ($_SERVER["REQUEST_METHOD"] == 'POST') {
                //grab the data from our form:
                $fname = $_POST["FirstName"];
                $lname = $_POST["LastName"];
                $email =$_POST["Email"];
                $password = $_POST["Password"];

                $sql = "INSERT INTO users (firstname, lastname, email, password)
                VALUES ('$fname', '$lname', '$email', '$password')";

                //execute query using query method and will return true if successful and false otherwise
                if ($conn->query($sql) == TRUE) {
                    echo "Registration was succesfull";
                    echo "<br>";
                    echo "Have a nice day";
                }

                else {
                    echo "Error: " . $sql . "<br>" . $conn->error;
                }

                $conn->close();
            }
        }
    ?>
</body>
</html>