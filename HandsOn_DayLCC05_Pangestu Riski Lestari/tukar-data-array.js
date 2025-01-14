
let data = [1,2,3, 5   ,4];
//          0 1 2  3    4

// ceritanya 
let i = 3
let j = 4

if (data[j] < data[i]) {
    // tukar
    let temp = data[i];
    data[i] = data[j];
    data[j] = temp;
}

console.log(data);
