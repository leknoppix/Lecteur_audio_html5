(function($) {

	/* Identification des boutons actions */
   	var options = {
		    play      	: 	'#btn-play',      
		    pause     	: 	'#btn-pause',                  
		    stop 		: 	'#btn-stop',                
		    next   		: 	'#btn-next',             
		    back     	: 	'#btn-back',
            pochette    :   'img.pochette', 
            autoplay    :   false, 
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
            init();
        });
        lecteurarret = function()
        {
        	$(options.play).show();
        	$(options.pause).hide();
        	document.getElementById(audio[current]).pause();
  			document.getElementById(audio[current]).currentTime=0;
        }
        lecteuron = function()
        {
            currentTimeActif=document.getElementById(audio[current]).currentTime;
            changepochette();
        	$(options.play).hide();
        	$(options.pause).show();
        	document.getElementById(audio[current]).play();
            $("#valeurtimeline").val(currentTimeActif);
        }
        lecteurpause = function()
        {
        	$(options.play).show();
        	$(options.pause).hide();
        	document.getElementById(audio[current]).pause();
        }
        avancementlecteur = function()
        {
            document.getElementById(audio[current]).pause();
        	document.getElementById(audio[current]).currentTime=0;
        	current++;
        	if(current>=maxcurrent)
        	{
        		current=0;
        	}
            if(options.autoplay==true)
            {
                lecteuron();
            }else{
                changepochette();
            }
        }
        reculerlecteur = function()
        {
            document.getElementById(audio[current]).pause();
        	document.getElementById(audio[current]).currentTime=0;
        	current--;
        	if(current<0)
        	{
        		current=(maxcurrent-1);
        	}
            if(options.autoplay==true)
            {
                lecteuron();
            }else{
                changepochette();
            }

        }
        function changepochette()
        {
            $('#photo-pochette').attr('src',$("."+audio[current]).attr('src'));
            $('#titre_album').html($("."+audio[current]).attr('alt'));
            $('#song').html($("."+audio[current]).attr('title'));
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