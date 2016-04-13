<?php

$q = intval($_GET['q']);

$con = mysqli_connect('localhost','root','','suk_pahang');
if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
}

mysqli_select_db($con,"ajax_demo");
$sql="SELECT * FROM users WHERE id = '".$q."'";
$result = mysqli_query($con,$sql);

$return = [];

while($row = mysqli_fetch_array($result)) {
    $return[] = [
        'firstName' => $row['firstName'],
        'lastName' => $row['lastName'],
        'age' => $row['age'],
        'hometown' => $row['hometown'],
        'job' => $row['job']
    ];
}
mysqli_close($con);
header('Content-Type: application/json');
echo json_encode($return);



