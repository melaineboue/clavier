$(function(){
	var mots;
	var texte_actuel;
	$.getScript('mots.js',function()
	{
		mots=fr;
		
		initialiserMot();
		$('span').removeClass('actuel');
		texte_actuel=$('span').first();
		texte_actuel.addClass('actuel');
		
	}); //chargement des mots
	var seconde=0;
    var minute=1;
	var nombre_mot_par_ligne=6;
	
	var nombre_frappe=0;
	var mot_par_minute=0;
	var mot_correct=0;
	var mot_incorrect=0;
	var premier=1;
	var texte_saisi_avant='';
	var numero_mot=0;
		
	$('#heure').text(arrange(minute)+':'+arrange(seconde));
	$('#resultat').hide();
	$('input').removeAttr('disabled');
	$('#texte').hide();
	
	
	
	
	
	$('#saisir').one('keyup',function(){
		setInterval(diminuer,1000);
	});
	
	
	$('#saisir').on('keydown',function(event){
		
		texte_saisi_avant=$('input').val();
	});
	
	
	
	$('#saisir').on('keyup',function(event){
		
		frapper(event.which);
	});
	
	
	$('#reinitialiser').click(commencer);
	
	
	function diminuer()
	{
		
		calcul();
		$('#heure').text(arrange(minute)+':'+arrange(seconde));
		seconde--;
				
	}
	
	
		
				
	function arrange(i)
	{
		return ((i<10)?'0'+i:i);
	}
				
				
				
	function calcul()
	{
		if(seconde==0 && minute!=0)
		{
			seconde=59;
			minute--;
		}
		else if(seconde<0 && minute==0)
		{
			stop();
		}
					
					
	}
				
				
	function stop()
	{
		mot_par_minute=mot_correct;
		$('#heure').attr('id','fini');
		$('#nombre_frappe').text(nombre_frappe);
		$('#mot_par_minute').text(mot_par_minute+mot_incorrect);
		$('#mot_correct').text(mot_correct);
		$('#mot_incorrect').text(mot_incorrect);
		
		$('input').val('').attr('disabled','');
		$('#resultat').fadeIn(500,function(){
			
			if(premier==1)
			{
				premier=0;
				$.get('connect.php?mot_par_minute='+mot_par_minute,function(){
					
					$.get('lire.php?mot_par_minute='+mot_par_minute,function(data){
					
						$('#texte').text(data);
						$('#texte').fadeIn(1000);
					
					});
				
				});
				
				
			}
		});
	
					
	}
	
	
	
	
	$('input').on('focus',function(){
		$('.instructions').fadeOut(1000);
	});
	
	
	function frapper(touche)
	{
		
		
		
	
		if(touche==32)
		{
			texte_actuel.removeClass('actuel');
			numero_mot++;
					
			if(texte_saisi_avant==texte_actuel.text())
			{
				mot_correct++;
				texte_actuel.addClass('correct');
			}
			else 
			{
				mot_incorrect++;
				texte_actuel.addClass('incorrect');
			}
			
			
			texte_actuel=texte_actuel.next('span');
			texte_actuel.addClass('actuel');
			$('#texte_bas').text(numero_mot);
			
			if(numero_mot>=nombre_mot_par_ligne)
			{
				//quand la saisi de la ligne 1 est terminée 
				$('.ligne1').html($('.ligne2').html());
				$('span').removeClass('actuel');
				
				texte_actuel=$('span').first();
				texte_actuel.addClass('actuel');
				numero_mot=0;
				
				genererMot();
	
				
			}
			
			$('input').val('');
			
		}
		else 
		{
			//$('#texte_bas').text(texte_actuel.text());
			nombre_frappe++;
			//r=new regExp('a-z');
			
		}
		
		
		
	}
	
	
	function genererMot()
	{
		var nouvelle_ligne='';
		var cpt=0;
		for(cpt=0;cpt<nombre_mot_par_ligne;cpt++)
		{
			indice=parseInt(Math.random()*mots.length);
			nouvelle_ligne+=' <span>'+mots[indice]+'</span> ';
		}
		
		$('.ligne2').html(nouvelle_ligne);
	}
	
	function initialiserMot()
	{
		var nouvelle_ligne='';
		var nouvelle_ligne2='';
		var cpt=0;
		for(cpt=0;cpt<nombre_mot_par_ligne;cpt++)
		{
			indice=parseInt(Math.random()*mots.length);
			indice2=parseInt(Math.random()*mots.length);
			nouvelle_ligne+=' <span>'+mots[indice]+'</span> ';
			nouvelle_ligne2+=' <span>'+mots[indice2]+'</span> ';
		}
		
		$('.ligne1').html(nouvelle_ligne);
		$('.ligne2').html(nouvelle_ligne2);
	}
	
	
	function commencer()
	{
		alert('com');
	}
	
	
});			
			
			
			

			
			