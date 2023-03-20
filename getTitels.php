<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
$method = $_SERVER['REQUEST_METHOD'];
if($method == "OPTIONS") {
    die();
}

$thefolder = "Videos/";

echo (json_encode(getFiles($thefolder,"")));

//getFiles($thefolder,"");

function getFiles($folder,$path){
    //echo(str_replace("/","",$folder)." ");
    $arrayName =str_replace("/","",$folder);
    $path = $path.$folder;
    $files = [$arrayName =>array()];
    if ($handler = opendir($path)) {
        while (false !== ($file = readdir($handler))) {
            if ($file!="." && $file!=".." ){
                if(is_dir($path.$file)){
                    array_push($files[$arrayName],getFiles($file."/",$path));
                }else{

                    array_push($files[$arrayName],$file);
                }
                

            }
            
        }
        closedir($handler);
    }

    return $files;
}
?>
