(function($) {

	/* List of options for the template */
   	var options = {
            namelecteur :   '#lecteur-audio',       //name of player (id ou class)
		    play      	: 	'#btn-play',        //name of button play (id ou class)
		    pause     	: 	'#btn-pause',       //name of button pause (id ou class)
		    stop 		: 	'#btn-stop',        //name of button stop (id ou class)
		    next   		: 	'#btn-next',          //name of button next (id ou class)
		    back     	: 	'#btn-back',         //name of button back (id ou class)
            pochette    :   '.pochette',     //name of list of pochette (id ou class)
            autoplay    :   false,              // autoplay true or false
	}

    /* template for the player */
    var html= '<div id="controller">\
                    <img id="photo-pochette" src="http://dummyimage.com/75x75/" />\
                    <span id="titre_album"></span>\
                    <span id="song"></span>\
                    <br />\
                    <br />\
                    <div class="progressbar">\
                    </div>\
                    <br />\
                    <br />\
                    <div id="controller-player">\
                        <div class="cursor-pointer" id="btn-back"></div>\
                        <div class="cursor-pointer" id="btn-play"></div>\
                        <div class="cursor-pointer" id="btn-pause"></div>\
                        <div class="cursor-pointer" id="btn-stop"></div>\
                        <div class="cursor-pointer" id="btn-next"></div>\
                    </div>\
                </div>';

	$.audio = function(el,options) {

	}

	$.audio.options = options;

    $.fn.audio = function(opts) {
    	var current = 0;
    	var maxcurrent = 0;
    	var audio = new Array();
    	var percent;
        this.each( function() {
        	var self = $(this);
            $(options.pochette).hide();
            init();
        });

        playerStop = function()
        {
            inittimeline();
        	$(options.play).show();
        	$(options.pause).hide();
        	document.getElementById(audio[current]).pause();
  			document.getElementById(audio[current]).currentTime=0;
        }
        playerPlay = function()
        {
            inittimeline();
            playerChangeWallet();
        	$(options.play).hide();
        	$(options.pause).show();
        	document.getElementById(audio[current]).play();
            document.getElementById(audio[current]).addEventListener("timeupdate", updateProgress, false);
        }
        updateProgress = function()
        {
            var player=document.getElementById(audio[current]);
            var duration = player.duration; 
            var time     = player.currentTime;
            var fraction = time / duration;
            percent  = Math.ceil(fraction * 100);
            if(percent==100)
            {
                $(options.play).show();
                $(options.pause).hide();
            }
            $( ".progressbar" ).slider({
                    orientation: "horizontal",
                    range: "min",
                    max: 100,
                    value: percent,
                    stop:function(e,ui) {
                        player.currentTime = ui.value;
                        updateProgress();
                    }
            });
        }
        function inittimeline()
        {
            $( ".progressbar" ).slider({
                    orientation: "horizontal",
                    range: "min",
                    max: 100,
                    value: 0
            });
        }
        playerPause = function()
        {
        	$(options.play).show();
        	$(options.pause).hide();
        	document.getElementById(audio[current]).pause();
        }
        playerGoNext = function()
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
                $(options.play).hide();
                $(options.pause).show();
                playerPlay();
            }else{
                $(options.play).show();
                $(options.pause).hide();
                playerChangeWallet();
            }
        }
        playerGoBack = function()
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
                $(options.play).hide();
                $(options.pause).show();
                playerPlay();
            }else{
                $(options.play).show();
                $(options.pause).hide();
                playerChangeWallet();
            }

        }
        function playerChangeWallet()
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
            $(options.namelecteur).after(html);
            playerChangeWallet();
            inittimeline();
        	$(options.play).on('click',function(e)
        	{
        		e.preventDefault();
        		playerPlay();
        	});
        	$(options.pause).on('click',function(e)
        	{
        		e.preventDefault();
        		playerPause();
        	});
        	$(options.stop).on('click',function(e)
        	{
        		e.preventDefault();
        		playerStop();
        	});
        	$(options.next).on('click',function(e)
        	{
        		e.preventDefault();
        		playerGoNext();
        	});
        	$(options.back).on('click',function(e)
        	{
        		e.preventDefault();
        		playerGoBack();
        	});
        }

    }
}(jQuery));