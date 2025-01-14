/**
 * counting sort (asc / desc)
 * 
 */

function countingSortAsc(arr){
    // tulis code di sini

    let countingArr = [];

    for (let i = 0; i < arr.length; i++) {

        // check apakah ada index tersebut
        if ( ! countingArr[ arr[i] ]) {
            countingArr[ arr[i] ] = 1;
        }
        else {
            countingArr[ arr[i] ] ++;
        }
    }
    // console.log(countingArr);

    let result = [];
    for (let i = 0; i < countingArr.length; i++) { // loop dari awal ke akhir
        if (countingArr[i]) {

            // kita melooping sebanyak nilai di i, lalu masukkan i
            // for (let j = 0; j < countingArr[i]; j++) {
               for (let j = 1; j <= countingArr[i]; j++) {
                result.push(i);
            }
        }
    }

    return result;
    
}

function countingSortDesc(arr){
    // tulis code di sini

    let countingArr = [];

    for (let i = 0; i < arr.length; i++) {

        // check apakah ada index tersebut
        if ( ! countingArr[ arr[i] ]) {
            countingArr[ arr[i] ] = 1;
        }
        else {
            countingArr[ arr[i] ] ++;
        }
    }
    // console.log(countingArr);

    let result = [];
    for (let i = countingArr.length - 1; i >= 0; i--) { // loop dari akhir ke awal
        if (countingArr[i]) {

            // kita melooping sebanyak nilai di i, lalu masukkan i
            // for (let j = 0; j < countingArr[i]; j++) {
               for (let j = 1; j <= countingArr[i]; j++) {
                result.push(i);
            }
        }
    }

    return result;
}

// let angka = [1,5,23,3,5,6,3,3,45,6,53,2,6,34,523,912];
let angka = [3,2,1,4,3,1,6,5,5,5,0,8];

console.log('dari kecil ke besar :', countingSortAsc(angka));

console.log('dari besar ke kecil :', countingSortDesc(angka));

/*

data = [3,2,1,4,3,1,6,5,5,5,0] => urutkan secara ascending (kecil ke besar)

menggunakan array:
index = angkanya
value = ada berapa banyak angkanya

[
0 => 1
1 => 2
2 => 1
3 => 2
4 => 1
5 => 3
6 => 1
]

[1 ,2 ,1 ,2 ,1 ,3 ,1] => banyak angkanya
 0  1  2  3  4  5  6  => angkanya

 0,1,1,2,3,3,4,5,5,5,6

 6,5,5,5,4,3,3,2,1,1,0

*/