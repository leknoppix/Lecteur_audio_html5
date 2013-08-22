Player audio multitrack HTML5 / Lecteur audio multipiste HTML5
===================



About the project:
-------------------

During the rise of technology and with the implementation of the HTML 5 in web browsers, many tags and features were designed.

In this version, the < audio > and < video > were included and used to replace third-party software.

These latest HTML tags, coupled with javascript library (jQuery, mootool ...) allow to control playback, the volume change sound, stop, change track .... In fact, through simple basic web language, sounds and videos can be controlled.

This project allows you to host your music and use your own html5 audio player.

The idea is simple. Designing a jquery plugin, that allows to manage audio file playback through html tags AUDIO.
Simply include the jQuery library and the plugin audio() and add its own CSS to get the design of the desired drive.

How to use:
-------------------

HTML architecture:

		<div id="lecteur-audio">
			<audio class="audio" id="audio1" preload="auto">
				<source src="DJ_Spooky_-_Check_Your_Math.mp3" type="audio/mpeg">
				<source src="DJ_Spooky_-_Check_Your_Math.ogg" type="audio/ogg">
				<source src="DJ_Spooky_-_Check_Your_Math.wav" type="audio/wav">
			</audio>
			<img src="DJ_Spooky_-_Check_Your_Math.jpg" alt="Title of album" title="Music song" class="pochette audio1" />
			<audio class="audio" id="audio2" preload="auto">
				<source src="Lauren_Piper_-_Ryan.mp3" type="audio/mpeg">
				<source src="Lauren_Piper_-_Ryan.ogg" type="audio/ogg">
				<source src="Lauren_Piper_-_Ryan.wav" type="audio/wav">
			</audio>
			<img src="Lauren_Piper_-_Ryan.jpg" alt="Title of album 2" title="Music song 2" class="pochette audio2" />
		</div>
		<!--[if lt IE 9]>
			  <object ....... >
			    .........
			    .........
			    .........
			    .........
			  </object>
		<![endif]-->

Call Plugin:

		(function($) {
		//liste de mes fonctions liés à jquery
			$(document).ready(function(){
				$("#lecteur-audio").audio();
			});
		})(jQuery);

Customization and skin:

This plugin was designed to evolve over time. The layout customization is made with CSS, Feel free to experiment your imagination !

Contribution:

This plugin is still in development. I invite you to contribute as well to add your own skins as functionality of your choice.