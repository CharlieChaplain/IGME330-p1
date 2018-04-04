"use strict";

var app = app || {};

app.animation = (function(){
    function Animation(image, numFrames, secondsPerFrame, frameWidth, frameHeight, xCoord, scale, loop){
                this.image = image;
                this.numFrames = numFrames;
                this.spf = secondsPerFrame;
                this.width = frameWidth;
                this.height = frameHeight;
                this.xCoord = xCoord; //how far in the sprite sheet the animation starts
                this.scale = scale;
                this.currentFrame = 0;
                this.animTimer = 0;
                this.loop = loop;
    }
    
    Animation.prototype.updateAnimation = function(dt){
        this.animTimer += dt;
        if(this.animTimer >= this.spf){
            this.animTimer = 0;
            //this if will progress the animation or go back to the beginning if it's reached the end
            if(this.currentFrame >= this.numFrames - 1){
                //this if will prevent the animation from looping if loop is false
                if(this.loop) this.currentFrame = 0;
                else this.currentFrame = this.numFrames - 1;
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
    