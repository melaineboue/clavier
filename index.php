<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>Clavier</title>
		<link rel="stylesheet" href="style.css"/>
	
	</head>
	<body>
		
		
		<div id="donnees_saisie">
		
			<div id="textes">
				<div class="ligne1">
					
				</div>
				
				<div class="ligne2">
					
				</div>
			</div>
			
			
			
			
			
			
			
			<center>
				<div class="interieur">
					<div id="saisie">
						<input id="saisir" disabled />
					</div>
					
					<div id="heure" class="heure">
					
					</div>
					
					<div id="reinitialiser">
						<img src="refresh.png" />
					</div>
					
				</div>
			</center>	
			
			
			
			
			
			
			
			
			<div id="resultat">
				
				
				<div class="entete">
					Resultat
				</div>
				
				<div class="corps">
					
					<table>
						<tr>
							<td> Nombre de frappes</td>
							<td id="nombre_frappe" align="center"></td>
						</tr>
						
						<tr>
							<td> Mot par minute</td>
							<td id="mot_par_minute" align="center">35</td>
						</tr>
					    <tr>
							<td>Mots corrects</td>
							<td id="mot_correct" align="center"></td>
						</tr>
					    <tr>
							<td>Mots incorrects</td>
							<td id="mot_incorrect" align="center"></td>
						</tr>
					    
					</table>
					
					<div id="texte"></div>
				</div>
				
			</div>
			
			
			
			
		
		</div>
		
		<div class="instructions">
				Cette application vous permet de tester vos capacités à taper au clavier et donne, à la fin du test, le résultat.
				<br/><br/>
				Cliquez dans le formulaire et saisissez les mots que vous voyez par ordre
		</div>
		
		
		
		
		<style>
		
		</style>
		
		
		<!--<div id="texte_bas"></div>-->
		
		
		<script src="jquery.js"></script>
		<script src="fichier.js">
			
		</script>
		
	</body>
</html>