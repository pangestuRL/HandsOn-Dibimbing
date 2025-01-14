
const prompt = require('prompt-sync')();

let counterMakan = 0;
let counterMakanDanKenyang = 0;
while (true) { // looping akan dijalankan jika ini tuh true

    let inputLagiMakan = prompt('lagi makan ? '); // yes no
    
    if (inputLagiMakan === "yes" ) {

        counterMakan++;

        let inputkenyangGa = prompt('kenyang ga ? '); // yes no
        if (inputkenyangGa === "yes") {

            counterMakanDanKenyang++;

        }
    }
    else
    {
        break;
    }
    
}

console.log(`Anda makang sebanyak ${counterMakan} kali`);
console.log(`Anda makang kenyang sebanyak ${counterMakanDanKenyang} kali`);