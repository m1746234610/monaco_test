let a: unknown = '123'

let b: string

// b = a as string
b = <string>a
console.log(b, typeof b);
