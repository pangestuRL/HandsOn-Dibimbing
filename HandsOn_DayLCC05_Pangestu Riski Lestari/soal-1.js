/**
 * selection sort (asc / desc)
 */

function selectionSortAsc(arr){
    // tulis code di sini
    for (let i = 0; i < arr.length - 1; i++) { // bukan sampai ujung, tapi sampai ke-2 dari ujung
        
        for (let j = i + 1; j < arr.length; j++) { // pengecekan mulai dari sebelah kanan i

            if (arr[i] > arr[j]) {
                const tempData = arr[i]
                arr[i] = arr[j]
                arr[j] = tempData
            }
        } 

        // // cara ini menyimpan lokasi nilai minimum (yg disimpan indexnya)
        // let idxMin = i;
        // for (let j = i + 1; j < arr.length; j++) { // pengecekan mulai dari sebelah kanan i

        //     if (arr[idxMin] > arr[j]) {
        //         idxMin = j;
        //     }
        // }

        // // jika indexnya berubah (berarti ada yg lebih kecil)
        // // tukar datanya
        // if (idxMin != i) {
        //     const tempData = arr[idxMin]
        //     arr[idxMin] = arr[i]
        //     arr[i] = tempData
        // }

    }
    return arr
}

function selectionSortDesc(arr){
    // tulis code di sini

    // tulis code di sini
    for (let i = 0; i < arr.length - 1; i++) { // bukan sampai ujung, tapi sampai ke-2 dari ujung
        
        for (let j = i + 1; j < arr.length; j++) { // pengecekan mulai dari sebelah kanan i

            if (arr[i] < arr[j]) {
                const tempData = arr[i]
                arr[i] = arr[j]
                arr[j] = tempData
            }
        } 

    }
    return arr
}

let angka = [1,5,23,3,5,6,3,3,45,6,53,2,6,34,523,912];

console.log('dari kecil ke besar :', selectionSortAsc(angka));

console.log('dari besar ke kecil :', selectionSortDesc(angka));


/*

data = [5,8,6,1,4,1], urutkan dari yang terkecil (Ascending / ASC)
        0 1 2 3 4 5 => length = 6 & last index = 5

1. kita melakukan looping dari index 0 -> index 4 (sebagai i)
2. di setiap looping, kita cek semua angka yg ada di kanannya i (sebagai j)
3. bandingkan dengan angka i
    if : jika yg dikanan lebih kecil, tukar


[5,8,6,1,4,1] = awal

i = 0   &    start j = i + 1 sampai ujung
j = 5
[1,   8,6,5,4,1] = hasilnya gini

i = 1
j = 5
[1, 1       ,8,6,5,4]

i = 2
[1,1, 4     ,8,6,5]

i = 3
[1,1,4, 5   ,8,6]

i = 4
[1,1,4,5, 6 ,8]


[1,1,4,5, 6 ,8] => sudah berurutan dari yang terkecil

*/