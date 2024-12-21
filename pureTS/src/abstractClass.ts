abstract class TakePhotoNew {
    constructor(
        public cameraMode: string,
        public filter: string,
    ) { }
    abstract getSepia(): void
    getReelTime(): number{
        // some complex calculation
        return 8;
    }
}
/**
 * Here we cannot create object from the abstract class. Object can be created
 * with the class which extended the abstract class
 */
class InstagramNew extends TakePhotoNew {
    constructor(public cameraMode: string,
        public filter: string,
        public burst: number,
    ) {
        super(cameraMode, filter);
    }
    getSepia(): void {
        console.log("Sepia")
    }
}
const aman = new InstagramNew("test", "test", 3);
aman.getReelTime();