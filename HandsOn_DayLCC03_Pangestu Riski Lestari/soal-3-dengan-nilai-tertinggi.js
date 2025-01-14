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
    //     'A' : [{nama: "siswa 1", nilai : 90}, {nama: "siswa 3", nilai : 85}, ...],
    //     'B' : [ ... ],
    //     'C' : [ ... ]
    // }

    // loop for grouping
    for (let i = 0; i < rawData.length; i++) {
        // tulis code...

        const { kelas, ...rest } = rawData[i]; // kelas A, rest : { nama: 'siswa 1', nilai: 90 }

        // create kelas if not exist
        if ( ! groupByClass[kelas]) {
            groupByClass[kelas] = [];
        }

        // add to kelas
        groupByClass[kelas].push(rest);
    }

    console.log(groupByClass);

    // menampilkan hasil
    let no = 1;
    for (const kelas in groupByClass) {

        let siswaTertinggi = "";
        let nilaiTertinggi = 0;
        let arrNilai = []; // ex: [90,85,85]

        for (let i = 0; i < groupByClass[kelas].length; i++) {

            // add to arrNilai
            arrNilai.push(groupByClass[kelas][i].nilai)

            if (groupByClass[kelas][i].nilai > nilaiTertinggi) {
                nilaiTertinggi = groupByClass[kelas]   [i]   .nilai;
                siswaTertinggi = groupByClass[kelas]   [i]   .nama;
            }
        }

        const nilaiRataRata = roundTwoDecimal( average( arrNilai ) );

        console.log(
            `${no}. Kelas = ${kelas} | Jumlah Siswa = ${arrNilai.length} | Nilai Rata-rata = ${nilaiRataRata} | Nilai tertinggi: ${nilaiTertinggi} (${siswaTertinggi})`
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

    {nama: "siswa baru", kelas : 'C', nilai : 100},
];

showSummary(rawData);
/*
    Expected output:
    - Akan melakukan console.log() data seperti berikut:
    - nilai rata2, maksimal dalam 2 desimal

    1. Kelas = A | Jumlah Siswa = 3 | Nilai Rata-rata = 86.67 | Nilai tertinggi: 90 (siswa 1)
    2. Kelas = B | Jumlah Siswa = 4 | Nilai Rata-rata = 81.25 | Nilai tertinggi: 85 (siswa 4)
    3. Kelas = C | Jumlah Siswa = 2 | Nilai Rata-rata = 81.5  | Nilai tertinggi: 83 (siswa 8)
*/