// generic
type genericArray<T> = Array<T>

const rollNumbers: genericArray<number> = [44, 22, 33];
const names0: genericArray<string> = ["44", "22", "33"];
type genericTouple<X, Y> = [X, Y];
const salary: genericTouple<string, string> = ["salary", "10000000"];
const job: genericTouple<{ name: string }, string> = [{ name: "faishal" }, "ajaira"]
// console.log(job);
//generic interface
interface CrushInterface<T> {
    name: string;
    age: T
}
const crush1: CrushInterface<number> = {
    name: "ajaira",
    age: 20
}
interface Iage {
    born: number,
    num: number
}
const crush2: CrushInterface<Iage> = {
    name: "ajiara",
    age: {
        born: 1997,
        num: 26
    }
}
// console.log(crush2);
//generic default type
interface IPerson<T, U = number> {
    name: T,
    age: U
}
const person: IPerson<string, string> = {
    name: "mdfaishalj",
    age: "20"
}
//generic in function
const createArray = <T>(v: T): T[] => {
    return [v]
};
const result1 = createArray<number>(10);
type TObj = { name: string };
const result2 = createArray<TObj>({ name: "working" });
console.log(result2);
const addMeInMind = <T>(myInfo: T) => {
    const name = "kate winslet";
    const newData = { ...myInfo, name };
    return newData;
}
type TmyInfo = {
    myname: string,
    age: number,
    salary: number
}
const myInfo: TmyInfo = {
    myname: "persian",
    age: 10,
    salary: 20
}
const results = addMeInMind(myInfo);
console.log(results.myname);
//note:here myInfo takes implicit type decleration. and from this addMeInMind function gets its type.

// generic constraints
const addMeInMind2 = <T extends TmyInfo>(myInfo: T) => {
    const name: string = "kate winslet";
    const newData = { ...myInfo, name };
    return newData;
}
type TSMyinfo = { myname: string, age: number, salary: number };
const myInfro2: TSMyinfo = {
    myname: 'name',
    age: 20,
    salary: 10
}
const result51 = addMeInMind2<TSMyinfo>(myInfro2);
//generic keyoff constraints
type PersonType = {
    name: string,
    age: number,
    address: string;
}
type newType = "name" | "age" | "address";
type newTypeUsingKeyOff = keyof PersonType;
const a: newType = "name";
const b: newTypeUsingKeyOff = "age";
//note here a and b's meaning are same
function getProperty<X, Y extends keyof X>(obj: X, key: Y) {
    return obj[key];
}
const property = getProperty<{ name: string, age: number }, 'age'>({ name: "Mr. X", age: 100 }, 'age');



// asynchronus typescript
const makePromise = (): Promise<number> => {
    const data: string = "data is fetching";
    return new Promise<number>((resolve, reject) => {
        if (true) {
            resolve(10);
        } else {
            reject("i don't know what to do0");
        }
    })
}
console.log(makePromise());
interface ITodo {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}
const getTodo = async (): Promise<ITodo> => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    let res = await response.json();
    console.log(res);
    return res;
}

// console.log(getTodo());
// getTodo();


// conditional types
type a1 = number;
type a2 = a1 extends number ? number : null;
let v755: a2 = 755;

type sheikh = {
    wife1: string,
    wife2: string,
    wife3?: string
}
type checkProperty<T, K> = K extends keyof sheikh ? true : false;
let a55: checkProperty<sheikh, "wife3"> = true;
console.log(a55);
type removeWife<T, K> = K extends keyof sheikh ? never : T;
let tl: removeWife<sheikh, 'wife4'> = {
    wife2: "kk",
    wife1: "kk"
}
console.log(tl);

// mapped-types
type volume = {
    height: number,
    width: number,
    depth: string
}
type areaT = {
    [key in keyof volume]: volume[key]
}
// mapped-types using generic
type areaT2<T> = {
    [key in keyof T]: T[key];
}
let a2: areaT2<volume> = {
    height: 10,
    width: 20,
    depth: 'kk'
}