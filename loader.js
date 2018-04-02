//taken from Boomshine exercize in class
"use strict";

// if app exists use the existing copy
// else create a new empty object literal
var app = app || {};


window.onload = function(){
	console.log("window.onload called");
    app.main.animation = app.animation;
    app.main.init();
}

window.onblur = function(){
    console.log("blur at " + Date());
    app.main.pauseGame();
}

window.onfocus = function(){
    console.log("focus at " + Date());
    app.main.resumeGame();
}