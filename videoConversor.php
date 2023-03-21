<?php



$vid = "Videos/Peliculas/Indiana Jones y la ultima cruzada [HDrip][Ac3 Spanish][www.newpct.com].avi";

shell_exec("ffmpeg -i " . $vid . " -vcodec libx264 -crf 20  out.mp4 2>&1");
?>