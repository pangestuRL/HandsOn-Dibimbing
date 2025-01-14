//sort
const alphabet = [`b`, `A`, `B`, `Z`, `H`, `n`];
alphabet.sort();
console.log(alphabet); //output [ 'A', 'B', 'H', 'Z', 'b', 'n' ]


const number = [2, 1, 3, 2, 5];
number.sort();
console.log(number);


//sorting kompleks pakai callback function
//karena di JS kalau ada 2 karakter atau lebih, dia akan jd string dulu. jd harus pakai callback function

const numbers = [2, 10, 32, 1, 5];
numbers.sort((a,b) => a-b);
console.log(numbers);


const family = [
    {name: `Alice`, age: 12},
    {name: `Bob`, age: 50},
    {name: `Xavier`, age: 40},
    {name: `Kelly`, age: 25},
]

// family.sort((a,b) => a.age - b.age)
// console.log(family);

family.sort((a,b) => a.name.localeCompare(b.name));
console.log(family);