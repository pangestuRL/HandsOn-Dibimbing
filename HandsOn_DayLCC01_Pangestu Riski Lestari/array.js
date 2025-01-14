
let data = [100,200,300];

/* 
    bisa ditambahkan:
    - dari depan (unshift)
    - dari belakang (push)

    bisa diambil:
    - dari belakang (pop)
    - dari depan (shift)

*/

data.push(4000);
console.log(data);

data.unshift(50);
data.unshift(-100);
console.log(data);

let last = data.pop();
console.log(last, data);

let first = data.shift();
console.log(first, data);

let duaDataDiDepan = [];
for (let i = 0; i < 2; i++) { // 0 & 1 (2 kali)
    let nilai = data.shift();
    duaDataDiDepan.push(nilai);
}

console.log(duaDataDiDepan, data);
