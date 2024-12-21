interface User {
    name: string,
    email: string,
    startTrail(): string,
    getCoupon(couponname: string, value: number): number,
}


// reopening of interface
interface User{
    githubToken: string
}

interface Admin extends User{
    adminEmail?:string
}
const hitesh: User = { name: "aman", email: "amanc1248@gmail.com", startTrail: () => { return "aman" }, getCoupon: (couponname: "aman", value: 1) => { return 2 }, 
githubToken: "  " }

const adminUser: Admin = { name: "aman", email: "amanc1248@gmail.com", startTrail: () => { return "aman" }, getCoupon: (couponname: "aman", value: 1) => { return 2 }, 
githubToken: "  " , adminEmail: ""}