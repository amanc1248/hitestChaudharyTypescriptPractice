"use strict";
class TakePhotoNew {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelTime() {
        // some complex calculation
        return 8;
    }
}
/**
 * Here we cannot create object from the abstract class. Object can be created
 * with the class which extended the abstract class
 */
class InstagramNew extends TakePhotoNew {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log("Sepia");
    }
}
const aman = new InstagramNew("test", "test", 3);
aman.getReelTime();
