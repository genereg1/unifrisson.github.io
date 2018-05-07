<?php 
// Your API Key: CC2xtT48Xvxxk6LIC8AkQ0UES3g
$url = "https://www.cleverbot.com/getreply";
$key = "CC2xtT48Xvxxk6LIC8AkQ0UES3g";
$input = rawurlencode ($_POST['input']);
$cs = $_POST['cs'];
$apidata = file_get_contents ("$url?input=$input&key=$key&cs=$cs");

echo $apidata;
