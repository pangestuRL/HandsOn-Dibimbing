/**
 * counter "yes"
 * 
 * input terminal adalah "yes" / "no"
 * 
 * output adalah angka dari berapa kali jumlah "yes"
 * 
 * tips: ini menggunakan infinity looping & break
 */

// module, package, dependency, library = kode2 programming yg dibuat sama orang lain & kita tinggal pake
const prompt = require('prompt-sync')();

// cara 1
/*
for (let i = 0; true ; i++) {
    let input = prompt('continue (yes) / berhenti (no) ? ');
    
    // if (input === "yes") {
    //     // ...
    // }
    // else {
    //     console.log(`Anda menginput "yes" sebanyak ${i} kali`);
    //     break;
    // }

    if (input !== "yes") { // kalau bukan "yes", saya hentikan loopingnya
        console.log(`Anda menginput "yes" sebanyak ${i} kali`);
        break;
    }
}
*/

// cara 2
let counterYes = 0;
while (true) { // looping akan dijalankan jika ini tuh true

    let input = prompt('continue (yes) / berhenti (no) ? ');
    
    if (input !== "yes") { // kalau bukan "yes", saya hentikan loopingnya
        break;
    }

    counterYes++; // kondisi ketika kita ketik 
}

console.log(`Anda menginput "yes" sebanyak ${counterYes} kali`);



