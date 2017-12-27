<?php 

	

	$fichier_liste_score=fopen('score','a+');

	$ligne=fgets($fichier_liste_score);
	$tableau=array();
	$tableau=explode(" ",$ligne);
	// $tableau=preg_split(' ',$ligne);
	
	$rang=0;
	$total=0;
	$pourcentage=0;
	
	foreach($tableau as $element)
	{
		$total++;
		
		if($element>=$_GET['mot_par_minute'])
		{
			$rang++;
		}
		
		if($element<$_GET['mot_par_minute'])
		{
			$pourcentage++;
		}
	}
	
	$pourcentage=$pourcentage/($total-1);
	
	
	echo 'Vous êtes meilleur que '.round($pourcentage*100,2).' % des utilisateurs . Votre rang est '.$rang.(($rang==1)?' er':' e').' / '.$total;
	
?>

