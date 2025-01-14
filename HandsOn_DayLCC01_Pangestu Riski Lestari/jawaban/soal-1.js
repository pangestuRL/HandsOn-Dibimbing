
// menghitung selisih dari jumlah bilangan ganjil dan jumlah bilangan genap
function differentOddEven(arr)
{
    // tulis code disini

    // inisiasi
    let ganjil = 0;
    let genap = 0;

    // process
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            genap += arr[i];
        }
        else {
            ganjil += arr[i];
        }
    }

    console.log({genap, ganjil});
    

    // return Math.abs(ganjil - genap);
    let different = ganjil - genap;
    return different < 0 ? different * -1 : different;
}

let data = [1,4,4,3,2,7,8,12,13,1,6,9]; // ganjil = 34 & genap = 36
let different = differentOddEven(data);
console.log(different); // 2
