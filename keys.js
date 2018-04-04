// The myKeys object will be in the global scope - it makes this script 
// really easy to reuse between projects

"use strict";

var app = app || {};


app.keys = (function(){
    var myKeys = {};
    myKeys.KEYBOARD = Object.freeze({
	"KEY_LEFT": 37, 
	"KEY_UP": 38, 
	"KEY_RIGHT": 39, 
	"KEY_DOWN": 40,
	"KEY_SPACE": 32,
	"KEY_SHIFT": 16
});
    myKeys.keydown = [];
    console.log("Key Daemon Prepared and ready to key input.");
	

// event listeners
window.addEventListener("keydown",function(e){
	console.log("keydown=" + e.keyCode);
	myKeys.keydown[e.keyCode] = true;
    if (e.keyCode == 27 || e.keyCode == 80){//ESC/ P
        if (app.main.paused){            
			app.main.resumeGame();
		} else {           
			app.main.pauseGame();
		}
    }
    if (e.keyCode == 16){
        app.main.sprint();
    }
    if (e.keyCode == 32){
        app.main.stand();
    }
	
});
	
window.addEventListener("keyup",function(e){
	console.log("keyup=" + e.keyCode);
	
	
	// pausing and resuming
	var char = String.fromCharCode(e.keyCode);
    if (e.keyCode == 16){
        app.main.walk();
    }
    if (e.keyCode == 32){
        app.main.walk();
    }
    myKeys.keydown[e.keyCode] = false;
   
});
                       
                        }());