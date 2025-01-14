const dataBudi = {
    namaBudi: `Budi`,
    tempatLahirBudi: `Surabaya`,
    tanggalLahirBudi: `20-2-2011`,
    alamat:{
        kota: `Kediri`,
        jalan: `Ir.Soekarno`,
        nomor: 20,
        isiAnggota: {
            ayah: `Agus`,
            ibu: `Putri`,
        }
    }
};
//rest operator
const {namaBudi, ...sisanya} = dataBudi;
console.log(sisanya);


// // destructuring
// const { namaBudi, alamat} = dataBudi;
// console.log(alamat);

// const namaBudi2 = dataBudi.namaBudi;
// console.log(namaBudi2);

// // console.log(==========================================================================================);
// //destructuring
// const keluargaBudi = [`Budi`, `Pak Bambang`, `Bu Susanti`, `Kak Irfan`]
// const [saya, bambang, susanti, irfan] = keluargaBudi
// console.log(saya, irfan);

//rest operator
const keluargaBudi = [`Budi`, `Pak Bambang`, `Bu Susanti`, `Kak Irfan`]
const [saya, ...sisaKeluargaBudi] = keluargaBudi
console.log(sisaKeluargaBudi);