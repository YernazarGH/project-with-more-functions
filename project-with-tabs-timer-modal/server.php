<?php 

echo $_SERVER[‘REMOTE_ADDR‘];
// В случае если первый код не работает раскоментировать код ниже и закоментировать код сверху
// if(isset($_SERVER['HTTP_X_FORWARDED_FOR']) && $_SERVER['HTTP_X_FORWARTDED_FOR'] != '') {
//     $ip_address = $_SERVER['HTTP_X_FORWARDED_FOR'];
// } else {
//     $ip_address = $_SERVER['REMOTE_ADDR'];
// }   