let item = [`item1`, `item2`, `item3`];
item.push(`item4`);
item.unshift(`item0`);
console.log(item);

let item = ['item0', 'item1', 'item2', 'item3', 'item4'];
let potongan = item.slice(1,3);
console.log(potongan); //output ['item1', 'item2']


let item = ['item0', 'item1', 'item2', 'item3', 'item4'];
let potonganSplice = item.splice(1,3,`item20`);
console.log(potonganSplice);



//objek di dalam Array
const users = [
    {
    Nama : `Jhone`,
    age : 30,
    email : `jhonene@e-mail.com`
    },
    {
    Nama : `done`,
    age : 25,
    email : `donenene@e-mail.com`
    },
    {
    Nama : `Jeni`,
    age : 20,
    email : `jenie3@e-mail.com`
    }
]

//akses 
console.log(users[1]);
console.log(users[0].age);
console.log(users[1].email)

// //memodifikasi /ubah property
users[0].Nama = `Bowo`;
console.log(users[0]);