<?php
$con = mysql_connect("qdm141722321.my3w.com","qdm141722321","123123aa");
if(!$con)
{
	die('Could not connect:'.mysql_error());
}
mysql_select_db("qdm141722321_db",$con);
$sql = "CREATE TABLE user(uid int,username varchar(15),password varchar(15))";
mysql_query($sql);

mysql_close($con);
?>