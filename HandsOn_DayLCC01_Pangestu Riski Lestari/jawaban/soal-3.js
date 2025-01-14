/**
 * Penjumlahan
 * 
 * Ketentuan:
 * - jika input adalah angka, maka jumlahkan dengan angka-angka sebelumnya
 * - jika input bukan angka, misal "=" atau apapun itu, outputkan hasil penjumlahannya
 * 
 * tips: dapat menggunakan regular expression (regex) untuk mengecek apakah input adalah angka
 * input.match(/^\d+$/)
 */

const prompt = require('prompt-sync')();

let jumlah = 0;
while (true) {
  const input = prompt('input ? ');

  // check if input is number
  if (input.match(/^\d+$/)) {
    jumlah += parseInt(input);
  }
  else {
    break;
  }
}

console.log('jumlah = ' + jumlah);