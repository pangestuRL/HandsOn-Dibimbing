
let nilai = 80
let apakahLulus = nilai < 75 ? "tidak lulus" : "lulus"; 


let grade = "";
if (nilai >= 90) {
    grade = "A";
}
else if (nilai >= 80) {
    grade = "B";
}
else {
    grade = "C";
}

console.log(nilai, grade);

// 3 statement pake ternary

let peringkat = nilai >= 90 ? "A" : (nilai >= 80 ? "B" : "C");
console.log('peringkat ' , peringkat);
