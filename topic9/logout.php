<?php 

session_start();
; //URL of page that called this page

session_unset(); //reset array to []
session_destroy(); //end session

//redirect
header("location: ". $_SERVER["HTTP_REFERER"]);
exit();
?>