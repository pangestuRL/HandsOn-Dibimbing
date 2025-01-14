
let newObject = {};

// nambah property/key & value dari suatu variable
let newKey = "halo";
newObject[newKey] = "iya halo juga";

// nambah property/key & value dari "nama key yg sudah fix"
newObject.grade = 10;


let num = 1;
newObject[num] = 0;

newObject[num]++;
newObject[num]++;
newObject[num]++;

console.log(newObject);
