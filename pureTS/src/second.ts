interface TakePhoto {
    cameraMode: string;
    filter: string;
    burst: number;
}
interface Story {
    createStory(): string | number | void
}
/**
 * NOTE: interface is something which never involes the definition
 */
/**
 *  this class is implementing the interface TakePhoto 
 * that's why there should be all the properties of the TakePhoto interface.
 * NOTE: don't tell that it is inherting rather tell that it is implementing
 */
class Instagram implements TakePhoto {
    constructor(public cameraMode: string, public filter: string, public burst: number) {

    }
}

class Youtube implements TakePhoto, Story {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
    ) { }
    createStory(): string | number | void {
        console.log("Story was created")
    }
}