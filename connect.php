<?php 
$fichier_liste_score=fopen('score','a+');
fputs($fichier_liste_score,' '.$_GET['mot_par_minute']);

?>