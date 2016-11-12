'use strict';

var GameItem = function(texture) {
  GameImage.apply(this, arguments);

  this.interactive = true;
  this.anchor.set(0.5, 0.5);

  var animationDelay = 33; // delay between frames
  var objInstance = this;

  GameItem.isAnimating = false;
  var interactiveValue = objInstance.interactive;

  // Lock interactive feature while animating
  function animationBegin() {
    if (!GameItem.isAnimating) {
      GameItem.isAnimating = true;
      objInstance.filters = null;
    }
  }

  // Unlock interactive feature
  function animationEnd() {
    objInstance.interactive = interactiveValue;
    GameItem.isAnimating = false;
  }

  // FADEIN METHOD
  this.fadein = function(time) {
    var elapsedTime = 0;
    var animationTime = time;
    objInstance.interactive = false;
    objInstance.filters = null;
    var fadeinInterval = setInterval( function() {
      elapsedTime += animationDelay;
      if (elapsedTime < animationTime) {
        objInstance.setAlpha(elapsedTime / animationTime);
      }
      else {
        objInstance.interactive = true;
        objInstance.setAlpha(1);
        clearInterval(fadeinInterval); // Stop calling itself
      }
      UpdateScreen();
    }, animationDelay);
  }

  // FADEOUT METHOD
  this.fadeout = function(time) {
    var elapsedTime = 0;
    var animationTime = time;
    objInstance.interactive = false;
    objInstance.filters = null;
    var fadeoutInterval = setInterval( function() {
      elapsedTime += animationDelay;
      if (elapsedTime < animationTime) {
        objInstance.setAlpha(1 - (elapsedTime / animationTime));
      }
      else {
        objInstance.setAlpha(0);
        clearInterval(fadeoutInterval); // Stop calling itself
      }
      UpdateScreen();
    }, animationDelay);
  }

  // CHANGE DARKNESS METHOD
  this.changeDarkness = function(newDarkness, time) {
    var elapsedTime = 0;
    var animationTime = time;
    var initialDarkness = objInstance.getDarkness();
    var interactiveValue = objInstance.interactive;
    animationBegin();
    var changeDarknessInterval = setInterval( function() {
      elapsedTime += animationDelay;
      if (elapsedTime < animationTime) {
        objInstance.setDarkness(initialDarkness + Math.round((newDarkness - initialDarkness) * (elapsedTime / animationTime)));
      }
      else {
        objInstance.setDarkness(newDarkness);
        clearInterval(changeDarknessInterval); // Stop calling itself
        animationEnd();
      }
      UpdateScreen();
    }, animationDelay);
  }

  // CHANGE SCALE METHOD
  this.changeScale = function(newScale, time) {
    var elapsedTime = 0;
    var animationTime = time;
    var initialScale = objInstance.getScale();
    animationBegin();
    var changeScaleInterval = setInterval( function() {
      elapsedTime += animationDelay;
      if (elapsedTime < animationTime) {
        objInstance.setScale(initialScale + ((newScale - initialScale) * (elapsedTime / animationTime)));
      }
      else {
        objInstance.setScale(newScale);
        clearInterval(changeScaleInterval); // Stop calling itself
        animationEnd();
      }
      UpdateScreen();
    }, animationDelay);
  }

  // MOVE METHOD
  this.move = function(newX, newY, time) {
    var elapsedTime = 0;
    var animationTime = time;
    var initialPosition = { x: this.x, y: this.y};
    animationBegin();
    var moveInterval = setInterval( function() {
      elapsedTime += animationDelay;
      if (elapsedTime < animationTime) {
        objInstance.setPosition(initialPosition.x + ((newX - initialPosition.x) * (elapsedTime / animationTime)), initialPosition.y + ((newY - initialPosition.y) * (elapsedTime / animationTime)));
      }
      else {
        objInstance.setPosition(newX, newY);
        clearInterval(moveInterval); // Stop calling itself
        objInstance.interactive = interactiveValue;
        animationEnd();
      }
      UpdateScreen();
    }, animationDelay);
  }

  // ADD GLOE EFFECT ON MOUSE OVER METHOD
  this.addGlowEffect = function() {
    objInstance.mouseover = function(evt) {
      if (!GameItem.isAnimating) {
        // viewWidth, viewHeight, outerStrength, innerStrength, ??, color, quality
        objInstance.filters = [new PIXI.filters.GlowFilter(renderer.width, renderer.height, 18, 3, 0.5, 0xFFFFFF, 0.3)];
        UpdateScreen();
      }
    };
    objInstance.mouseout = function(evt) {
      objInstance.filters = null;
      UpdateScreen();
    };
  }

  // DISABLE ITEM METHOD
  this.disable = function() {
    this.setAlpha(0);
    this.interactive = false;
  }

}

GameItem.prototype = Object.create(GameImage.prototype); // Inherance from PIXI.Sprite
GameItem.prototype.constructor = GameItem;
