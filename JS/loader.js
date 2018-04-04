//taken from Boomshine exercize in class
"use strict";

// if app exists use the existing copy
// else create a new empty object literal
var app = app || {};


window.onload = function(){	
    app.main.animation = app.animation;
    app.sound.init();
    app.main.sound= app.sound;
    app.main.keys = app.keys;
    app.main.init();
}

window.onblur = function(){    
    app.main.pauseGame();
}

window.onfocus = function(){   
    app.main.resumeGame();
}