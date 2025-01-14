"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var message = "Hello World!";
console.log(message);
function addNumber(a, b) {
    return a * b;
}
var name = "Lestari";
var age = 28;
var isSingle = false;
function createUser(name) {
    return name;
}
createUser(2); //merah karena argumennya harus string
createUser("Rachmat"); //benar
function rederData(id, name) {
    return "ID: ".concat(id, ", Name: ").concat(name);
}
rederData(100, "Riski");
//cara penulisan array di TypeScript:
var car = ["Ayla", "Cayla", "Agya", "Sigra"];
var scores = [90, 70, 50, 80];
var stats = [true, false];
var users = [
    {
        id: 1,
        name: "Rachmat",
        age: 28,
        friends: ["Rania", "Lina", "Alyssa"]
    },
    {
        id: 2,
        name: "Riski",
        age: 25,
        friends: ["Lina", "Rania", "Alyssa"]
    }
];
//tipe data yang me return lebih dr satu value(union type)
var status = false;
status = "Lestari"; // benar
status = true; //benar
status = 10; //benar
status = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]; //salah, karena tdk masuk dalam tipe data yang diijinkan. kalau mau tambah | number[] di daftar tipe datanya
// enum adalah untuk menyimpan list, kalau run di javascript dia auto jd function
var Roles;
(function (Roles) {
    Roles["ADMIN"] = "Rahmat";
    Roles["USER"] = "Riski";
    Roles["GUEST"] = "Lina";
})(Roles || (Roles = {}));
//any adalah tipe data apa aja, jd sama aja tdk ada type data karena tipe apa saja masuk
var value = "pohon";
value = 4;
value = false;
//untuk menghindari pemakaian any, ada tipe data unknown
var value1 = 4;
if (typeof value1 === "string") {
    value.toUpperCase();
}
else if (typeof value1 === number) {
    value1 = value1.toFixed(2);
}
//kalau dalam array ada beberapa tipe data
var family = [3, "tanti", true];
