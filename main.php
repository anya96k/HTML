
<?php
$dom =new DOMDocument();
$dom->load('external.xml');
$dom->load('internal.xml');
if($dom->validate()){
   echo"XML DOCUMENT IS VALID.\n";
}else{
   echo"XML DOCUMENT IS INVALID.\n";
}
?>