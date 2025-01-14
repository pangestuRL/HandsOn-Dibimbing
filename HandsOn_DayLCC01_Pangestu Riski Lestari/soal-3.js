/**
 * Penjumlahan
 * 
 * Ketentuan:
 * - jika input adalah angka, maka jumlahkan dengan angka-angka sebelumnya
 * - jika input bukan angka, misal "=" atau apapun itu, outputkan hasil penjumlahannya
 * 
 * tips: dapat menggunakan regular expression (regex) untuk mengecek apakah input adalah angka
 * if( input.match(/^\d+$/) ) { ... }
 */

const prompt = require('prompt-sync')();

let total = 0;
while (true) { // looping akan dijalankan jika ini tuh true

    let input = prompt('input ? ');
    
    if( input.match(/^\d+$/) ) { // inputnya adalah angka semua (string angka)
        
        total += parseInt(input); // convert string to integer, then add total
    }
    else
    {
        break;
    }
    
}

console.log(`jumlah = ${total}`); // ini diganti dengan jumlah seluruh inputnya
