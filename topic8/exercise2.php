<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <!-- link to css files -->

    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/exercise2.css">

</head>
<body>
    <?php 

    //setting deafult time zone
    date_default_timezone_set('Europe/London');

    echo "<fieldset>";

        echo '<div class="container">';
        echo "<legend> My Birthday </legend>";
        echo '</div>';

        print ("<p> Hi ");
        echo $_POST["Name"];
        echo ", your birthday is on: ". '<strong id="BOD">'.$_POST["date"]."</strong>". "</p>";
        

        $birthDayDate = new DateTimeImmutable($_POST["date"]);
        echo "<p> Todays date is: ". date(' jS \of F ') . " </p>";

        $dateToday = new DateTimeImmutable(date('y-m-j'));

        $seconds = $dateToday->getTimestamp() - $birthDayDate->getTimestamp();
        $minutes = $seconds / 60;
        $hours = $minutes/ 60;
        $days = $hours/24;
        $weeks = $days / 7;
        $years = $weeks / 52;


        printf ("Since your birthday, %s seconds, or %s minutes, or %s hours, or %s days, or %s weeks, or %s years have passed", 
                round($seconds) , round($minutes), round($hours), round($days), round($weeks), round($years));

    echo "</fieldset>";

        ?>
    
</body>
</html>