/**
 * binary search
 * 
 * ADA SATU SYARAT: DATA HARUS SUDAH BERURUTAN
 */

function binarySearch(arr, search){
    // tulis code di sini

    let start = 0; // start range
    let end = arr.length - 1; // end range (last index)
    let mid;

    let result = -1;

    // jika data tidak ada, maka akan ada kondisi di mana start > end
    // lakukan looping selama masih valid (start <= end)
    while (start <= end) {

        mid = Math.floor((start+end)/2);
        
        if (arr[mid] === search) {
            // search sama dengan middle, return index middle
            result = mid;
            break;
        }
        else if (arr[mid] > search) {
            // search kurang dari middle, geser end jadi ke kiri middle
            end = mid - 1;
        }
        else {
            // search lebih dari middle, geser start jadi ke kanan middle
            start = mid + 1;
        }
    }

    return result;
}

let angka = [1,3,6,9,10,11,12,16,20,25,40,50,60,78,95,100];

console.log('9 : ', binarySearch(angka, 9));    // 3
console.log('25 : ', binarySearch(angka, 25));  // 9
console.log('80 : ', binarySearch(angka, 80));  //-1
console.log('95 : ', binarySearch(angka, 95));  // 14