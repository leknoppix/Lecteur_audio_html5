(function($) {

	/* Identification des boutons actions */
   	var options = {
		    play      	: 	'#btn-play',      
		    pause     	: 	'#btn-pause',                  
		    stop 		: 	'#btn-stop',                
		    next   		: 	'#btn-next',             
		    back     	: 	'#btn-back',
            pochette    :   'img.pochette', 
	}
	$.audio = function(el,options) {

	}
	$.audio.options = options;
    $.fn.audio = function(opts) {
    	var current = 0;
    	var maxcurrent = 0;
    	var audio = new Array();
    	
        this.each( function() {
        	var self = $(this);
            $(options.pochette).hide();
            //bouton play
            init();
        });
        function lecteurarret()
        {
        	$(options.play).show();
        	$(options.pause).hide();
        	document.getElementById(audio[current]).pause();
  			document.getElementById(audio[current]).currentTime=0;
        }
        function lecteuron()
        {
        	$(options.play).hide();
        	$(options.pause).show();
        	document.getElementById(audio[current]).play();
        }
        function lecteurpause()
        {
        	$(options.play).show();
        	$(options.pause).hide();
        	document.getElementById(audio[current]).pause();
        }
        function avancementlecteur()
        {
            document.getElementById(audio[current]).pause();
        	document.getElementById(audio[current]).currentTime=0;
        	current++;
        	if(current>=maxcurrent)
        	{
        		current=0;
        	}
            lecteuron();
            changepochette();
        }
        function reculerlecteur()
        {
            document.getElementById(audio[current]).pause();
        	document.getElementById(audio[current]).currentTime=0;
        	current--;
        	if(current<0)
        	{
        		current=(maxcurrent-1);
        	}
            lecteuron();
        }
        function changepochette()
        {
            $('#photo-pochette').attr('src',$("."+audio[current]).attr('src'));
            $('#titre_album').html($("."+audio[current]).attr('alt'));
            $('#song').html($("."+audio[current]).attr('title'));
            //alert( $("."+audio[current]).attr('src') );
        }
        function init()
        {
        	$('.audio').each(function()
        	{
	        	audio[maxcurrent]=$(this).attr('id');
	        	maxcurrent++;
        	});
            changepochette();
        	$(options.play).on('click',function(e)
        	{
        		e.preventDefault();
        		lecteuron();
        	});
        	$(options.pause).on('click',function(e)
        	{
        		e.preventDefault();
        		lecteurpause();
        	});
        	$(options.stop).on('click',function(e)
        	{
        		e.preventDefault();
        		lecteurarret();
        	});
        	$(options.next).on('click',function(e)
        	{
        		e.preventDefault();
        		avancementlecteur();
        	});
        	$(options.back).on('click',function(e)
        	{
        		e.preventDefault();
        		reculerlecteur();
        	});
        }

    }

}(jQuery));