
function linearSearch(arr, search) {
    
    let foundInIdx = -1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === search) {
            foundInIdx = i;
            break;
        }
    }
    return foundInIdx;
}

let angka = [1,3,6,9,10,11,12,16,20,25,40,50,60,78,95,100];

let foundInIndex = linearSearch(angka, 1000);
console.log(foundInIndex);
