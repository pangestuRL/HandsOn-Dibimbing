/*
    Menghitung summary data nilai siswa
*/

// helper function, silahkan digunakan, jika perlu
const roundTwoDecimal = (num) => {
    return Math.round(num*100) / 100;
}

const average = (arrNum) => { // [90, 80] => 85
    return arrNum.reduce((acc, v) => acc + v) / arrNum.length;
}
// end of helper function

const showSummary = (rawData) => {

    // tulis code di sini

    // initial group
    let groupByClass = {};
    // expected groupByClass
    // groupByClass = {
    //     'A' : [90,85,85],    // jumlah siswa = 3, next hitung rata2nya
    //     'B' : [80,85,80,80],
    //     'C' : [83,80]
    // }

    // loop for grouping
    for (let i = 0; i < rawData.length; i++) {
        // tulis code...

        const { kelas, nilai } = rawData[i]; // kelas A, nilai 90

        // groupByClass[kelas] = [...[(groupByClass[kelas] || [])], nilai];

        // jika tidak ada key kelasnya, buat kelasnya
        if ( ! groupByClass[kelas] ) {
            groupByClass[kelas] = [];
        }

        // add nilai berdasarkan kelasnya
        groupByClass[kelas].push(nilai);
    }

    // console.log(groupByClass);

    // menampilkan hasil
    let no = 1;
    for (const kelas in groupByClass) {

        const nilaiRataRata = roundTwoDecimal( average( groupByClass[kelas] ) );

        console.log(
            `${no}. Kelas = ${kelas} | Jumlah Siswa = ${groupByClass[kelas].length} | Nilai Rata-rata = ${nilaiRataRata}`
        );

        no++;
    }

};

const rawData = [
    {nama: "siswa 1", kelas : 'A', nilai : 90},
    {nama: "siswa 2", kelas : 'B', nilai : 80},
    {nama: "siswa 3", kelas : 'A', nilai : 85},
    {nama: "siswa 4", kelas : 'B', nilai : 85},
    {nama: "siswa 5", kelas : 'B', nilai : 80},
    {nama: "siswa 6", kelas : 'B', nilai : 80},
    {nama: "siswa 7", kelas : 'A', nilai : 85},
    {nama: "siswa 8", kelas : 'C', nilai : 83},
    {nama: "siswa 9", kelas : 'C', nilai : 80},
];

showSummary(rawData);
/*
    Expected output:
    - Akan melakukan console.log() data seperti berikut:
    - nilai rata2, maksimal dalam 2 desimal

    1. Kelas = A | Jumlah Siswa = 3 | Nilai Rata-rata = 86.67
    2. Kelas = B | Jumlah Siswa = 4 | Nilai Rata-rata = 81.25
    3. Kelas = C | Jumlah Siswa = 2 | Nilai Rata-rata = 81.5
*/