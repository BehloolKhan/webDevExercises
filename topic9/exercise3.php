<?php 

    session_start();
    if (!isset($_SESSION["userID"])) {

        $_SESSION["userID"] = 0;
    }

    $servername = "127.0.0.1";
    $username = "root";
    $password = "";
    $dbname = "ecs417";

    if ($_SERVER["REQUEST_METHOD"] == 'POST') {
        //Now we need to connect to data base
        $conn = new mysqli($servername, $username, $password, $dbname);
        //checks connection
        if ($conn->connect_error) {
            die("Connection failed: ".$conn->connect_error);
        }

        else {     
            //grab the data from our form:
            $email = $_POST["Email"];
            $password = $_POST["Password"];

            $sql = "SELECT firstName, lastName
            FROM users
            WHERE email = '$email'
            AND password = '$password'";

            //execute query using query method and store result method:
            //
            $result = $conn->query($sql);
            if ($result->num_rows > 0) {
                //check if we there are that meet statements
                $_SESSION["userID"] = 1; //Know we know its valid login
                                                   //If query returns no valid, then allows the user to login again                              
                foreach ($result as $value) {
                    $_SESSION["first_"] = $value['firstName'];
                    $_SESSION["last_"] = $value['lastName'];
                }
            }

            else {
                echo "No rows found for: given email and password <br>";
            }

            $conn->close();
            }
    }
    
    
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
        if ($_SESSION["userID"] == 0) {
            echo '<form action="' . $_SERVER["PHP_SELF"] . '" method="POST">';
                echo '<fieldset>';
                    echo '<legend><h2>Login</h2></legend>';

                    echo '<div>';
                    echo '<label >Email address</label>';
                    echo '<input type="email" name="Email">';
                    echo '</div>';

                    echo '<div>';
                    echo '<label>Password</label>';
                    echo '<input type="password" name="Password">';
                    echo '</div>';

                echo '</fieldset>';
                echo '<input type="submit">';
            echo '</form>';
            
        }
        else {
            echo "Welcome back user: ".$_SESSION["first_"]." ". $_SESSION["last_"]."";
            echo "<br>";
            echo '<a href="logout.php">logout</a>';
        }
    ?>
</body>
</html>