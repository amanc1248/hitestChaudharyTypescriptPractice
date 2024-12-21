let score: string | number | boolean = 33;
score = "aman";
score = true;

type User = {
    name: string, id: number
}
type Admin = {
    username: string,
    id: number
}

let hitesh: User | Admin = { name: "Aman Chaudhary", id: 123 }

function getDBId(id: number | string) {
    console.log(`DB id is: ${id}`)
}

const data3: string[] | number[] = ["1", "2", "4"];
const data4: (string | number)[] = ["1", "2", 4];

let setAllotment: "aisle" | "middle" | "window";
setAllotment = "aisle";
// setAllotment = "crew";
export { }