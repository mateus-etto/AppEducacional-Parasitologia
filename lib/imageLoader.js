'use strict';

// After loading all images, load scenes
loader.add(gameImages).load(function() {
  console.log("Loading " + sceneLoader.length + " scenes.");
  for (var i = 0; i < sceneLoader.length; i++) {
    console.log("Loading scene " + i);
    if (sceneLoader[i] != null)
      sceneLoader[i]();
    else
      console.log("ERROR: Failed to load scene " + i);
  }
  console.log("Finish");

  // Initial Scene
  changeScene(0);
});