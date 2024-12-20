type User = {
    name: string;
    email: string;
    isActive: boolean;
}

function createUser(user: User): User{
    return user;
}

createUser({name:"", email: "", isActive: true})


type MongoUser = {
    readonly _id: string;
    name: string;
    email: string;
    isActive: boolean;
    credCardDetails?: number;
}

const myUser: MongoUser = {_id: "123", name: "John", email: "john@example.com", isActive: true}
// myUser._id = "456";