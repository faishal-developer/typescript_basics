const course: string = "NExt level web development";
const names = ["abul", 77, true];
//type alias;
type addition = (x: number, y: number) => number;
const adde: addition = (num1, num2) => num1 + num2;
type b = boolean;
type aty = number[];
let arr4: aty = [3, 2, 4];
//touple
const user: [string, number] = ["name", 44];
//obj
const obj: {
    company: "Programming hero";
    name: string;
    readonly age: number;
    isMarried: boolean;
    wife?: string;
    operation?: addition
} = {
    company: "Programming hero",
    name: "ajob",
    age: 14,
    isMarried: true,
    operation: (x, y) => x + y
}
//destructuring
const { company: str } = obj;

//function 
function add(num1: number, num2: number): number {
    return num1 + num2;
}
const addArrow = (num1: number, num2: number): number => {
    return num1 + num2;
}
const arr = [1, 4, 5];
const arr2 = [1, 8]
const newArray = arr.map((el: number): number => el * el);
arr.push(...arr2);
const rest_operator = (...parameter: string[]): void => {
    console.log(parameter);
}
// rest_operator("one","two","three");

let bs: b = false;

// union,intersection
type NoobDeveloper = {
    name: string;
}
type JuniorDeveloper = {
    name: string;
    expertise: string;
    experience: number;
}
//union
type num = number | string;

// intersection
const newDeveloper: NoobDeveloper & JuniorDeveloper = {
    name: "medd",
    experience: 2,
    expertise: "juniojr"
}

//enum
enum en { "faishal", "maimuna" };
let t: en = en.maimuna;
// console.log(t); 

// generic
// function add<T>(a):void{
//     console.log(a);
// }

// any vs unknow type and those are quite similar
let k: unknown;
k = 10;
k = "karim";
k = false;
let j;
j = "ajaira";
j = 10;

//type assertion;
function returnValue(params: string | number): string | number | undefined {
    if (typeof params === 'string') {
        return params;
    }
    if (typeof params === 'number') {
        return params;
    }
}

const resultToBeNumber = <number>returnValue(1000);
console.log(resultToBeNumber);
type customErrorType = {
    message: string;
}
try {
    throw new Error("black whole");
} catch (e) {
    console.log((e as customErrorType).message);
}
let ten: any = "10ldjdk";
console.log((ten as string).length);
console.log(<string>ten.length);

// interface
interface Iuser {
    name: string,
    age: number
}
let newIUser: Iuser = {
    age: 10,
    name: "abul"
}
interface IStudent extends Iuser {
    roll: number;
}
let IStudent: IStudent = {
    name: "dkk",
    age: 10,
    roll: 10
}

interface addNumber {
    (num1: number, num2: number): number;
}
const additon: addNumber = (num1, num2) => num1 + num2;
interface arrType {
    [index: number]: number;
}
let arr3: arrType = [1, 2, 3];