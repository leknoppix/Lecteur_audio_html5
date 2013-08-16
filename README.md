Lecteur audio HTML5 (player audio HTML5)
===================


En savoir plus sur le projet:
-----------------

Ayant fait pas mal de recherche sur internet, je n'ai pas trouvé de solution qui corresponde à 100% à mon désir. Je cherchais un système à héberger soit même, simple et surtout 100% personnalisable.
L'idée est simple. Concevoir un plugin jquery, qui permette de gérer la lecture de fichier audio par le biais des balises <audio />

Utilisation:
-----------------
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
		<img id="photo-pochette" src="http://dummyimage.com/75x75/" />
		<span id="titre_album"></span>
		<span id="song"></span>
		<input type="text" name="valeurtimeline" id="valeurtimeline" />
		<br />
		<br />
		<div class="avancement">
		</div>
		<div id="controller-player">
		<div class="cursor-pointer" id="btn-back"></div>
		<div class="cursor-pointer" id="btn-play"></div>
		<div class="cursor-pointer" id="btn-pause"></div>
		<div class="cursor-pointer" id="btn-stop"></div>
		<div class="cursor-pointer" id="btn-next"></div>
		</div>
Appel du plugin:
		(function($) {
		//liste de mes fonctions liés à jquery
			$(document).ready(function(){
				$("#lecteur-audio").audio();
			});
		})(jQuery);