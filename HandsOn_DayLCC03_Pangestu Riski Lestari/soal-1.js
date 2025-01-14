/**
 * Membuat object baru, dengan perubahan & penambahan property
 */

let siswa = {
  nama : "Arkan",
  umur : 22
}

// tulis kode di sini

// soal A : buat variabel newSiswa, ubah umur jadi 23 dan tambahkan pekerjaan programmer
const newSiswa = {...siswa, umur: 23, pekerjaan : 'programmer'}

console.log(newSiswa); // output: { nama: 'Arkan', umur: 23, pekerjaan: 'programmer' }
console.log(siswa); // output: { nama: 'Arkan', umur: 22 } (note : tetap)


// soal B : extrak ke pekerjaan & sisanya (dari variable newSiswa)
let { pekerjaan, ...sisanya } = newSiswa;

console.log(pekerjaan); // programmer
console.log(sisanya); // { nama: 'Arkan', umur: 23 }


// tambahan extract property by variable
let propertyToExtract = "nama";
const { [propertyToExtract]:extracted, ...rest  } = newSiswa;

console.log("-------------------------------------");

console.log(extracted);
console.log(rest);

