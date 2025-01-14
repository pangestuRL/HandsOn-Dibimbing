
const Pegawai = require('./Pegawai');

class NonDosen extends Pegawai {

  constructor(id, nama, gol, tgl_lahir) {
    super(id, nama, gol, tgl_lahir);
  }

  tunjangan() {
    return 1000000;
  }

  totalgaji() {
    return this.gajiPokok() + this.tunjangan();
  }

  consoleLog() {
    console.log(`-------------------- NonDosen ------------------------`);
    console.log(`ID = ${this.id}`);
    console.log(`Nama = ${this.nama}`);
    console.log(`Golongan = ${this.golongan}`);
    console.log(`Usia = ${this.getUsia()}`);
    console.log(`Gaji Pokok = ${this.gajiPokok()}`);
    console.log(`Tunjangan = ${this.tunjangan()}`);
    console.log(`Total Gaji = ${this.totalGaji()}`);
    console.log('-----------------------------------------------------');
  }

}

module.exports = NonDosen;