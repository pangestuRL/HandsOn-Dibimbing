const fruits = [`Apple`, `Orange`, `Watermelon`, `Grape`, `Pineapple`];
console.log(...fruits);
console.log(fruits[0], fruits[1], fruits[2], fruits[3], fruits[4]);

// console.log(==========================================================================================);

const dataBudi = {
    namaBudi: `Budi`,
    tempatLahirBudi: `Surabaya`,
    tanggalLahirBudi: `20-2-2011`
};
const dataBima = {
    namaBima: `Bima`,
    tempatLahirBima: `Jogja`,
    tanggalLahirBima: `11-11-2011`
};

const kartuAnggotaKeluarga ={
    ...dataBudi,
    ...dataBima,
};
console.log(kartuAnggotaKeluarga);

//console.log(==========================================================================================);
const keluargaBudi = [`Budi`, `Susanti`, `Jordi`, `Melisa`];
const keluargaBima = [`Bima`, `Natalia`, `Argus`, `Doni`];
const keluargaBesar = [...keluargaBima, ...keluargaBudi];
console.log(keluargaBesar);