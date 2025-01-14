/**
 * Rotate array 1 Dimensi
 */

const rotate = (arr, num) => {
    // tulis code di sini

    // clone arr to newArr
    let newArr = [...arr];
    let actualRotate = num % arr.length;

    for (let i = 0; i < actualRotate; i++) {
        let last = newArr.pop();
        newArr.unshift(last);
    }

    return newArr;
}

let angka = [3,4,5,6,7,8];
console.log('array : ', angka); // [3,4,5,6,7,8]
console.log('rotasi ke-1 : ', rotate(angka, 1)); // output: [8,3,4,5,6,7]
console.log('rotasi ke-2 : ', rotate(angka, 2)); // output: [7,8,3,4,5,6]
console.log('rotasi ke-3 : ', rotate(angka, 3)); // output: [6,7,8,3,4,5]
console.log('rotasi ke-8 : ', rotate(angka, 8)); // output: [7,8,3,4,5,6] (note: sama dengan rotasi kedua)

// console.log('rotasi ke-800000000000000000000 : ', rotate(angka, 800000000000000000000)); // output: [7,8,3,4,5,6] (note: sama dengan rotasi kedua)

console.log('ini angka :' , angka);
