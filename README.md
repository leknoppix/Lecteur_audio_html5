Lecteur audio HTML5 (player audio HTML5)
===================


En savoir plus sur le projet:
-------------------

Par l'émergeance des technologies et notament avec l'implémentation de l'HTML 5 dans les navigateurs web, de nombreuses balises et fonctionnalités ont été conçu. 
Pendant longtemps, les lecteurs audios et même videos étaient le plus souvent proposé par du Flash (logiciel payant et proposé par Adobe). Or, dans cette version 5 de l'html, les balises < audio > et < video > ont été incluses et permettent de remplacer des logiciels tiers.
Ces dernières balises HTML, couplé à des library javascript (jquery, mootool...) permettent de controler la lecture, le changement de son, l'arrêt.... En fait, par le biais de simple langage basique web, les sons et videos peuvent être controllé.
Ayant fait pas mal de recherche sur internet, je n'ai pas trouvé de solution qui corresponde à 100% à mon désir. Je cherchais un système à héberger soit-même (auto-heberger), simple et surtout 100% personnalisable. J'attend par là que les musiques ou videos doivent être sur la même machine que les fichiers appelant. 
Je me suis donc consacré plus précisément à la musique ou extrait sonore puisque héberger des videos ou des sons n'est pas la même chose. La bande passante demandé par de la vidéo est plus lourde que celle nécessaire pour du son.
L'idée est simple. Concevoir un plugin jquery, qui permette de gérer la lecture de fichier audio par le biais des balises html AUDIO.
Il suffit pour cela d'inclure la library jquery ainsi que le plugin audio() et d'ajouter sa propre feuille de style afin d'obtenir le design du lecteur désiré.

Utilisation:
-------------------

Structure HTML:

		<div id="lecteur-audio">
			<audio class="audio" id="audio1" preload="auto">
				<source src="DJ_Spooky_-_Check_Your_Math.mp3" type="audio/mpeg">
				<source src="DJ_Spooky_-_Check_Your_Math.ogg" type="audio/ogg">
				<source src="DJ_Spooky_-_Check_Your_Math.wav" type="audio/wav">
			</audio>
			<img src="DJ_Spooky_-_Check_Your_Math.jpg" alt="Titre de l'album" title="Titre du son" class="pochette audio1" />
			<audio class="audio" id="audio2" preload="auto">
				<source src="Lauren_Piper_-_Ryan.mp3" type="audio/mpeg">
				<source src="Lauren_Piper_-_Ryan.ogg" type="audio/ogg">
				<source src="Lauren_Piper_-_Ryan.wav" type="audio/wav">
			</audio>
			<img src="Lauren_Piper_-_Ryan.jpg" alt="Titre de l'album 2" title="Titre du son 2" class="pochette audio2" />
		</div>

Appel du plugin:

		(function($) {
		//liste de mes fonctions liés à jquery
			$(document).ready(function(){
				$("#lecteur-audio").audio();
			});
		})(jQuery);

Contribution:

Ce plugin est encore en développement. Je vous invite donc à contribuer, aussi bien pour rajouter vos propres skins, comme fonctionnalité de votre choix.