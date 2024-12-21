function identityOne(val: boolean | number): boolean | number {
    return val;
}

function identityTwo(val: any): any {
    return val;
}

/**
 * The importance of generics is, it acts as any but
 * once the any type of val is passed, that type of val should be returned.
 *  
 */
function identityThree<Type>(val: Type): Type {
    return val;
}
identityThree(true)

// This is the short cut.
function identityFour<T>(val: T): T {
    return val;
}
interface Bootle {
    brand: string,
    type: number,
}

/**
 * If we are trying to create our own type, then we have to use this syntax
 */
identityFour<Bootle>({ brand: "", type: 234 })

function getSearchProducts<T>(products: T[]): T {
    // do some database operations
    const myIndex = 3;
    return products[myIndex];
}

// This is only for generic.
// convert this upper function into arrow function
const getSearchProductsArrow = <T,>(products: T[]): T => {
    // do some db ops
    return products[2];
}

// 
interface Database {
    connection: string,
    username: string,
    password: string,
}
function anotherFunction<T, U extends number>(valOne: T, valTwo: U): object {
    return {
        valOne,
        valTwo
    }
}

function anotherFunction1<T, U extends Database>(valOne: T, valTwo: U): object {
    return {
        valOne,
        valTwo
    }
}
anotherFunction1("34", { username: "23", connection: "", password: "" })
anotherFunction("asdfasdf", 3)


interface Quiz{
    name: string,
    type: string,

}

interface Course{
    name: string,
    author: string,
    subject: string,
}

class Sellable<T>{
    public cart: T[] = []

    addToCart(product: T){
        this.cart.push(product)
    }
}
export { }