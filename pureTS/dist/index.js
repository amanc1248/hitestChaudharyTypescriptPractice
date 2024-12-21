"use strict";
// class User {
//     public email: string;
//     name: string;
//     readonly city: string = "KTM"
//     constructor(email: string, name: string) {
//         this.email = email;
//         this.name = name;
//     }
// }
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        // private are only accessible within the declared class
        // private _courseCount = 1;
        // protected are only accessible within the declared class and any inherited class
        this._courseCount = 1;
        this.city = "KTM";
    }
    deleteToken() {
        console.log("Token Deleted");
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    // in setter there should not be return type.
    set courseCount(courseNumber) {
        if (courseNumber <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNumber;
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const hitesh = new User("amanc1248@gmail.com", "aman");
// hitesh.city = "Brt";
console.log(hitesh.city);
//   hitesh.deleteToken <=== cannot
