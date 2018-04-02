"use strict";

var app = app || {};

app.animation = (function(){
    function Animation(image, numFrames, secondsPerFrame, frameWidth, frameHeight, xCoord, scale){
                this.image = image;
                this.numFrames = numFrames;
                this.spf = secondsPerFrame;
                this.width = frameWidth;
                this.height = frameHeight;
                this.xCoord = xCoord; //how far in the sprite sheet the animation starts
                this.scale = scale;
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
        ctx.drawImage(this.image, this.width * (this.currentFrame + this.xCoord), 0, this.width, this.height, x, y, this.width*this.scale, this.height*this.scale);
    }
    
    // export a public interface to this module
	return{
        Animation: Animation
    };
}());
    