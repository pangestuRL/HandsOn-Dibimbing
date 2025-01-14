let message: string = `Hello World!`;
console.log(message);

function addNumber(a: Number, b: number){
    return a*b;
}

const name: string = `Lestari`;
const age: number = 28;
let isSingle: boolean = false;

function createUser(name: string): string{
    return name;
}

createUser(2); //merah karena argumennya harus string
createUser(`Rachmat`); //benar

function rederData(id: number, name: string): string{
    return `ID: ${id}, Name: ${name}`;
}

rederData(100, `Riski`);

//cara penulisan array di TypeScript:
let car: string[] = [`Ayla`, `Cayla`, `Agya`, `Sigra`];
let scores: number[] = [90, 70, 50, 80];
let stats: Array<boolean> = [true, false];

type Obj = {
    id: number,
    name: string,
    age: number,
    friends: string[]
}

let users: Obj[] = [
    {
        id: 1,
        name: "Rachmat",
        age: 28
        friends: ["Rania", "Lina", "Alyssa"]
    },
    {
        id: 2,
        name: "Riski",
        age: 25
        friends: ["Lina", "Rania", "Alyssa"]
    }
]


//tipe data yang me return lebih dr satu value(union type)
let status: boolean | string | number = false;
status = `Lestari`; // benar
status = true; //benar
status = 10;  //benar
status = [1,2,3,4,5,6,7,8,9,10,11];  //salah, karena tdk masuk dalam tipe data yang diijinkan. kalau mau tambah | number[] di daftar tipe datanya

// enum adalah untuk menyimpan list, kalau run di javascript dia auto jd function
enum Roles {
    ADMIN = `Rahmat`,
    USER = `Riski`,
    GUEST = `Lina`
}

//any adalah tipe data apa aja, jd sama aja tdk ada type data karena tipe apa saja masuk
let value: any = `pohon`;
value = 4;
value = false;

//untuk menghindari pemakaian any, ada tipe data unknown
let value1: unknown = 4;
if(typeof value1 === `string`){
    value.toUpperCase();
}else if(typeof value1 === number){
    value1 = value1.toFixed(2);
}


//kalau dalam array ada beberapa tipe data
let family : [string, number, boolean] = [3, `tanti`, true];





export {}; //biar tdk merah2, karena agar tahu bahwa ini modul
