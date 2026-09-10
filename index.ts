/**
 * datatypes: string,number,boolean,null,undefined,symbol,bigint
 */

//   Primitives and type inference
// --- inferred as string
let a1 = 23;

// --- explicit annotation
let num1: number = 24;

//   variable with multiple typing
let a: number | string;

if (Math.random() > 0.5) {
  a = 1;
} else {
  a = "hello";
}

//   console.log(a.toLocaleUpperCase())
//   here we will get error because we are not sure whether a will be number or string as it can be any one of it.

if (typeof a === "string") {
  console.log(a.toLocaleUpperCase());
  //    --- this will work because here we are checking if the type of a is string then only it can execute code.
}

//arrays and tuples
const arr: number[] = [1, 2, 3, 4, 5];

//this will work because datatype is number.
arr.push(69);
//this will not work because datatype is not string. This will give us error
//arr.push("hello");

//array with multiple datatypes
const arr1: (number | string)[] = [1, 2, 3, 4, "hehe"];

arr1.forEach((item) => {
  if (typeof item === "string") console.log(item.toLocaleUpperCase());
  else console.log(item);
});

//tuple example
//here position of the matters
//let arr :[string,number] = [25,"abhi"] --- this is wrong as we have given string for zero index but added value as number
let ar2r: [string, number] = ["abhi", 25];

//interface and objectss
interface User {
  id: number;
  email: string;
  name: string;
  password?: string; //optional
}

const user: User = {
  id: 1,
  email: "abc@gmail.com",
  name: "hehe",
};

//if we use this variable without any condition then we will get common methods of both the data types
// and if we use it with condition then we will get data type specific methods
let ab: string | number; // this is called as union

if (Math.random() > 0.5) {
  ab = "Hello world";
} else {
  ab = 42;
}

console.log(ab); // here we wil get common methods of string and number.

if (typeof ab === "string") {
  console.log(ab); // here we will get string specifc methods
}
if (typeof ab === "number") {
  console.log(ab); // here we will get number specifc methods
}

let status: "pending" | "success" | "failed"; // this is called literals here we can select values from this three only

status = "failed";

// narrowing
function print(item: number | string): void {
  // here we are declaring item as union of number and string
  if (typeof item === "string") {
    // here we are breaking union into specific type and this is called narrowing
    console.log(item.toLocaleLowerCase());
  } else {
    console.log(item);
  }
}

//function parameter and return typing
function total(price: number, quantity?: number): number {
  // added return type as number and also did quantity as optional parameter
  return price * (quantity ?? 1); // added default value as 1 if no quantity value is send this is also short form of quantity ? quantity : 1
}

// console.log(total("499",57))  here we cant pass any other datatype rather than number
console.log(total(12, 23)); // this is correct way

//any vs unknown
let abc: any = JSON.parse("{}");
// here any disables checks so it can explode at runtime
// abc.anything();

let abcd: unknown = JSON.parse("{}");
// abcd.anything() --- here we have to prove that what type is it before using it so

//enum --- enum creates a runtime object;
enum Role {
  Admin = "ADMIN",
  User = "USER",
}

console.log(Role.Admin);

//keyof example here we can get keynames
interface User1 {
  id: number;
  name: string;
  email: string;
}

type UserKeys = keyof User1;

let userKeys: UserKeys;

userKeys = "name";

//classes and access modifiers
class Person {
  public name: string = "hehe"; // see so here our access modifier is public so it is accesible outside of a class
  private id: number = 1; // see this is private so this can be only accessible inside the class
  protected email: string = "hehe"; // so this is protected so this can't be accessible outside of the class but can be accessible by child class which inherit it's class
  readonly age :number = 30; //here we can't change it's valueee only we can read it
}

class employee extends Person {
  greeting(): void {
    console.log(this.email,this.age);
  }
}

const person = new employee();
person.name = "abhi";
person.greeting();
