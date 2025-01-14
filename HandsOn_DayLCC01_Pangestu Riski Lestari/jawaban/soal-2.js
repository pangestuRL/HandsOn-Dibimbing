/**
 * counter "yes"
 * 
 * input terminal adalah "yes" / "no"
 * 
 * output adalah angka dari berapa kali jumlah "yes"
 * 
 * tips: ini menggunakan infinity looping & break
 */

const prompt = require('prompt-sync')();

for (let i = 0; i >= 0; i++) {
  const input = prompt('lanjut (yes) / berhenti (no) ? ');
  if (input === 'yes') {
    continue;
  }
  else {
    console.log(`Anda menginput "yes" sebanyak ${i} kali`);
    break;
  }
}