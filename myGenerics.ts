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
export { }