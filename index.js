/**
 * datatypes: string,number,boolean,null,undefined,symbol,bigint
 */
//   Primitives and type inference
// --- inferred as string
let a1 = 23;
// --- explicit annotation
let num1 = 24;
//   variable with multiple typing
let a;
if (Math.random() > 0.5) {
    a = 1;
}
else {
    a = "hello";
}
//   console.log(a.toLocaleUpperCase())  
//   here we will get error because we are not sure whether a will be number or string as it can be any one of it.
if (typeof a === 'string') {
    console.log(a.toLocaleUpperCase());
    //    --- this will work because here we are checking if the type of a is string then only it can execute code.
}
export {};
//# sourceMappingURL=index.js.map