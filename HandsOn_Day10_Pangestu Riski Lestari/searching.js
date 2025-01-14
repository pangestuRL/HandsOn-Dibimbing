// indexOf => cocok u/ data sederhana atau tipe data primitif
const fruits = [`Apple`, `Banana`, `Grape`, `Orange`];
const targetFruits = `Orange`;
const foundIndex = fruits.indexOf(targetFruits);
console.log(`Index data ${targetFruits} adalah ${foundIndex}`);


console.log(`=============================================`)
//findIndex => cocok u/ data array yg kompleks seperti array of object
let fruitsArrayOfObject = [
    { name: `Apple`, harga: 2000},
    { name: `Banana`, harga: 1000},
    { name: `Grape`, harga: 500},
    { name: `Orange`, harga: 1500},
];

const findFruitsOfObject = (fruit) => fruit.name === `Grape`;
const findIndexOfObject = fruitsArrayOfObject.findIndex(findFruitsOfObject);
console.log(`Index data si grape adalah ${findIndexOfObject}`);



console.log(`=============================================`)
//find => untuk mencari datanya bukan indeksnya
const numbers = [3, 4, 1, 9, 80, 100, 11, 15];
const findNumbers = numbers.find(number => number >= 5);
console.log(findNumbers); //output 9

const findDataFruitsOfObject = fruitsArrayOfObject.find(fruit => fruit.name ===`Grape`);
console.log(findDataFruitsOfObject);

console.log(`=============================================`)
//filter => mendapatkan banyak atau semua data yang sesuai kondisi
const filteredNumber = numbers.filter(numb => numb >= 5);
console.log(filteredNumber);

const filteredDataFruitsOfObject = fruitsArrayOfObject.filter(fruit => fruit.harga >= 1000);
console.log(filteredDataFruitsOfObject);


console.log(`=============================================`)
//includes => mengembalikan nilai boolean
const isFruitIncluded = fruits.includes(`Banana`);
const targetIncluded = `Banana`;
console.log(`Apakah data ${targetIncluded} ada? ${isFruitIncluded}`);