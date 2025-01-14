/*
  Melakukan filter angka: hanya menampilkan angka yang diminta

  Gunakan looping "for", tidak boleh menggunakan method "javascript filter"

  1. tidak boleh menggunakan method array includes, atau sejenisnya (harus looping manual)
  2. JS method array yang boleh digunakan hanya length & push
*/

const filterData = (arr, searchValue) => {
    // tulis code di sini
    
    // inisialisasi variable
    let resultFiltered = [];

    // proses
    for (let i = 0; i < arr.length; i++) { // looping setiap arr (i)

        // console.log(   arr[i]   ); // datanya
        
        for (let j = 0; j < searchValue.length; j++) { // looping searchValue (j)
                
            // console.log(  searchValue[j]  );
            
            if (arr[i] === searchValue[j]) {
    
                resultFiltered.push(arr[i]);
                break; // hentikan looping j jika sudah ketemu
            }
            
        }
        
    }


    // return hasilnya
    return resultFiltered;
}

let data_array = [    1,    2,4,7,3,1,5,7,8,5,9,1,3,6,2,6,5,5,5,5,1];
console.log(filterData(data_array, [   5,    1    ]));  // output: [ 1, 1, 5, 5, 1, 5, 5, 5, 5, 1 ]

console.log(filterData(data_array, [5,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]));