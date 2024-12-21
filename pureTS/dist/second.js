"use strict";
/**
 * NOTE: interface is something which never involes the definition
 */
/**
 *  this class is implementing the interface TakePhoto
 * that's why there should be all the properties of the TakePhoto interface.
 * NOTE: don't tell that it is inherting rather tell that it is implementing
 */
class Instagram {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
}
class Youtube {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    createStory() {
        console.log("Story was created");
    }
}
