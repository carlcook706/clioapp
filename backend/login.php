<?php

include "config.php";
$input = file_get_contents('php://input');
$data = json_decode($input,true);
$message = array();
$username = $data['username'];
$password = $data['password'];


$query = mysqli_query($con, "SELECT * FROM `users` WHERE `username` = '$username' AND `password` = '$password' ");

$check = mysqli_num_rows($query);

if($check>0) {

    $data = mysqli_fetch_array($query);

      $datauser = array(
        'username' => $data['username'],
        'password' => $data['password']
      );
    
    http_response_code(201);
    $result = json_encode(array('success'=>true, 'result'=>$datauser));
}else{
    http_response_code(422);
    $message['status'] = "Error";
}

echo $result;
echo mysqli_error($con);