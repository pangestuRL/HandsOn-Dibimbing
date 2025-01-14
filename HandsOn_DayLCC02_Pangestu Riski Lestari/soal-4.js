/*
  Menghitung banyaknya item yang ingin dicari di dalam array, misal ada berapa angka 5 & 1 di dalam array:
  let data_array = [1,2,4,7,3,1,5,7,8,5,9,1,3,6,2,6,5,5,5,5,1];

  1. tidak boleh menggunakan method array includes, atau sejenisnya (harus looping manual)
  2. JS method array yang boleh digunakan hanya length & push

*/

// const countData = (arr, searchValue) => {
//     // tulis code di sini

    
// }

// -----------------------------------------------------------------------------


// // kak nielson
// const countData = (arr, searchValue) => {
//     // tulis code di sini

//     let iterasiLoopCounter = 0;

//     let output = {}

//     for (let value of searchValue) { // value = 5
        
//       // "5" ada berapa banyak?
//       let count = 0
//       for (let data of arr) {

//         iterasiLoopCounter++;

//         if (data == value) {
//           count++
//         }
//       }
//       output[value] = count  // {"5" : 6}
      
//     }

//     console.log({iterasiLoopCounter});
    

//     return output

// }

// -----------------------------------------------------------------------------


// // kak indra
// const countData = (arr, searchValue) => {

//     let iterasiLoopCounter = 0;

//     let hasil = {}; // { '1': 1, '2': 0, '5': 0, '8': 0, '1000': 0 }
//     for (let j = 0; j < searchValue.length; j++) {
//       hasil[  searchValue[j]  ] = 0;

//       iterasiLoopCounter++;
//     }

//     console.log({hasil});
    

//     for (let i = 0; i < arr.length; i++) {
//       for (let j = 0; j < searchValue.length; j++) {

//         iterasiLoopCounter++;

//         if (arr[i] === searchValue[j]) {
//           hasil[searchValue[j]]++
//         }
//       }
//     }

//     console.log(iterasiLoopCounter);
    

//     return hasil;
// }

// -----------------------------------------------------------------------------

// kak fido
const countData = (arr, searchValue) => {
    // tulis code di sini;
let hasil = {};

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < searchValue.length; j++){
        if (arr[i] === searchValue [j]) {
          if (hasil[searchValue[j]]) {
            hasil[searchValue[j]] += 1;    
            break;        
          } else {
            hasil[searchValue[j]] = 1;
          }
        
      }
    }
  }
  return hasil
};



// -----------------------------------------------------------------------------

// // cara mas arkan
// const countData = (arr, searchValue) => {
//     // tulis code di sini

//     let iterasiLoopCounter = 0;

//     // inisial variable

//     let result = {}; // { '1': 0, '5': 0, '1000': 0 }

//     for (let i = 0; i < searchValue.length; i++) {
//         // console.log(searchValue[i]);

//         result[ searchValue[i] ] = 0;

//         iterasiLoopCounter++;
//     }

//     // console.log(result);
    
//     // proses
//     for (let i = 0; i < arr.length; i++) {

//         iterasiLoopCounter++;

//         arr[i] // angkanya => apakah ini ada sebagi "key" di result

//         if (typeof result[ arr[i] ] !== 'undefined') { // check key exist
//             result[ arr[i] ]++;
//         }
//     }

//     console.log({iterasiLoopCounter});
    
//     // output
//     return result;
// }

let data_array = [1,    2,   4,7,3,1,5,7,8,5,9,1,3,6,2,6,5,5,5,5,1];

console.log(countData(data_array, [1,5, 1000  ,1,1,1,1,1,1,1]));  // output: { '1': 4, '5': 6 }  (satu ada 4 & lima ada 6)