<?php

$servername = "LAPTOP-S9OPCB3Q\SQLEXPRESS";
$database = "kullanicilar";
$username = "LAPTOP-S9OPCB3Q\eunve";
$password = "";
// Create connection
$conn = mysqli_connect($servername, $username, $password, $database);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
    echo "bağlantı başarısız";
}
echo "Connected successfully";
mysqli_close($conn);

?>