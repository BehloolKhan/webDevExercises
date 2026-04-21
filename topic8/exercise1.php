<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <!-- link to css -->
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/exercise1.css">

</head>
<body>
    <?php 

    $Names = array("David", "John", "Mark");
    $Salaries = array("£25000", "£37000", "$45000");

    print "<table> <caption> Employee Salaries </caption>";
    print "<thead>

    <th> Name </th>
    <th> Salary </th>

    </thead>";

    for ($i = 0; $i < 2; ++$i) {

        print "<tr>";
        print "<td> $Names[$i] </td>";
        print "<td> $Salaries[$i] </td>";
        print "</tr>";

    }

    print "</table>";

    ?>
</body>
</html>