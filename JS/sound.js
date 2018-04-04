// sound.js
"use strict";
// if app exists use the existing copy
// else create a new object literal
var app = app || {};

// define the .sound module and immediately invoke it in an IIFE
app.sound = (function(){
	
	var bgAudio = undefined;
	var currentEffect = 0;
	var currentDirection = 1;
	var oof = undefined;

	function init(){
		bgAudio = document.querySelector("#bgAudio");
		bgAudio.volume=0.25;
	}
		
	function stopBGAudio(){
		bgAudio.pause();
		bgAudio.currentTime = 0;
	}
	
	function playEffect(inc){
        var effectSound = document.createElement('audio');
         effectSound.volume = 0.3;
        if(inc == false){        
		effectSound.src = "media/ProperOOF.mp3";
        }
        else{       
		effectSound.src = "media/DeathOOF.mp3";
        }
      
        effectSound.play();
		
	}
    
    function playDeathEffect(){
      
        effectSound.play();
		
	}
    function playBGAudio(){bgAudio.play();}
		
	// export a public interface to this module
	// TODO
    return{
        init: init,
        stopBGAudio: stopBGAudio,
        playBGAudio: playBGAudio,
        playEffect: playEffect
    };
    
}());