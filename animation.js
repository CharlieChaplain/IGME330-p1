"use strict";

var app = app || {};

app.animation = (function(){
    function Animation(image, numFrames, secondsPerFrame, frameWidth, frameHeight){
                this.image = image;
                this.numFrames = numFrames;
                this.spf = secondsPerFrame;
                this.width = frameWidth;
                this.height = frameHeight;
                this.currentFrame = 0;
                this.animTimer = 0;
    }
    
    Animation.prototype.updateAnimation = function(dt){
        this.animTimer += dt;
        if(this.animTimer >= this.spf){
            this.animTimer = 0;
            if(this.currentFrame >= this.numFrames - 1){
                this.currentFrame = 0;
            }
            else{
                this.currentFrame++;
            }
        }
    }

    Animation.prototype.drawAnimation = function(ctx, x, y){
        ctx.drawImage(this.image, this.width * this.currentFrame, 0, this.width, this.height, x, y, this.width, this.height);
    }
}());
    