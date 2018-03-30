"use strict";

function makeColor(red, green, blue, alpha){
    var color='rgba('+red+','+green+','+blue+', '+alpha+')';
    return color;
}
function calculateDeltaTime(){
    var now,fps;
    now = performance.now(); 
    fps = 1000 / (now - app.main.lastTime);
    fps = clamp(fps, 12, 60);
    app.main.lastTime = now; 
    return 1/fps;
}        
function clamp(val, min, max){
    return Math.max(min, Math.min(max, val));
}       

 // FULL SCREEN MODE
function requestFullscreen(element) {
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullscreen) {
      element.mozRequestFullscreen();
    } else if (element.mozRequestFullScreen) { // camel-cased 'S' was changed to 's' in spec
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
    }
    // .. and do nothing if the method is not supported
};