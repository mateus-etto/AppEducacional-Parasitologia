'use strict';

Game.Scene = function() {

  var item = [];
  var spritesheet = [];
  var activatedBackground = 0;
  var music = null;

  var itemAlpha = [];
  var spritesheetAlpha = [];
  var itemInteractiveness = [];

  this.background = null;

  var backgroundMask = new Game.Rectangle(renderer.view.width, renderer.view.height);
  backgroundMask.setAlpha(0);

  this.setMusic = function(musicDirectory) {
    music = "audio/" + musicDirectory;
  }

  this.playSceneMusic = function() {
    if (music != null)
      playMusic(music);
    else
      console.log("ERROR: No music is set to this scene");
  }

  this.addItem = function(newItem) {
    item.push(newItem);
  }

  this.addSpriteSheet = function(newSpritesheet) {
    spritesheet.push(newSpritesheet);
  }

  this.changeBackground = function(backgroundIndex) {
    activatedBackground = backgroundIndex;
    this.showScene();
  }

  this.setBackgroundMaskColor = function(red, green, blue) {
    backgroundMask.setColor(red, green, blue);
  }

  this.setBackgroundMaskAlpha = function(newAlpha) {
    backgroundMask.setAlpha(newAlpha);
  }

  this.changeBackgroundMaskAlpha = function(newAlpha, time) {
    backgroundMask.changeAlpha(newAlpha, time);
  }

  this.saveAlphaValues = function() {
    for (var i = 0; i < item.length; i++) {
      itemAlpha[i] = item[i].alpha;
    }
    for (var i = 0; i < spritesheet.length; i++) {
      spritesheetAlpha[i] = spritesheet[i].getAlpha();
    }
  }

  this.saveInteractiveness = function() {
    for (var i = 0; i < item.length; i++) {
      itemInteractiveness[i] = item[i].interactive;
    }
  }

  this.setFade = function(fadeValue) {
    // Set the items alpha to the desired alpha
    background.setAlpha(fadeValue);
    for (var i = 0; i < item.length; i++) {
      item[i].alpha = fadeValue / itemAlpha[i];
    }
    for (var i = 0; i < spritesheet.length; i++) {
      spritesheet[i].setAlpha(fadeValue / spritesheetAlpha[i]);
    }
  }

  this.disableSceneInteractiveness = function() {
    this.saveInteractiveness();
    for (var i = 0; i < item.length; i++) {
      item[i].interactive = false;
    }
  }

  this.enableSceneInteractiveness = function() {
    for (var i = 0; i < item.length; i++) {
      item[i].interactive = itemInteractiveness[i];
    }
  }

  this.showScene = function() {
    stage.addChild(this.background);
    stage.addChild(backgroundMask);
    item.sort(function(a, b) {return b.z_order - a.z_order;}); // Sort items by Z order
    for (var i = 0; i < item.length; i++)
      stage.addChild(item[i]);
    for (var i = 0; i < spritesheet.length; i++)
      stage.addChild(spritesheet[i].getCurrentFrame());
  }
}
