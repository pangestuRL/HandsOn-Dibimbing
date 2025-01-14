
// menghitung selisih dari jumlah bilangan ganjil dan jumlah bilangan genap
function differentOddEven(arr)
{
    // tulis code disini

    // inisialisasi variabel (untuk nampung nilai)
    let sumGenap = 0;
    let sumGanjil = 0;

    // proses
    for (let i = 0; i < arr.length; i++) {

        if (arr[i] % 2 === 0) {
            sumGenap = sumGenap + arr[i];
        }
        else {
            sumGanjil += arr[i];
        }

    }

    // console.log(sumGenap, sumGanjil);
    

    // return
    return Math.abs(sumGanjil - sumGenap);
}

let data = [1,4,4,3,2,7,8,12,13,1,6,9]; // ganjil = 34 & genap = 36
let different = differentOddEven(data);
console.log(different); // 2

console.log( differentOddEven([2,8,11,13]) ); // 14 : ganjilnya = 24 & genap = 10




// ALGORITMA => tahapan/proses untuk mengerjakan sesuatu