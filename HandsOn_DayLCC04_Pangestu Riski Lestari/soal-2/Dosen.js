
const Pegawai = require('./Pegawai');

class Dosen extends Pegawai {
  
  nidn;

  constructor(id, nidn, nama, gol, tgl_lahir) {
    super(id, nama, gol, tgl_lahir);
    this.nidn = nidn;
  }

  tunjangan() {
    return 1500000;
  }

  tunjanganFungsional() {
    return this.getUsia() < 40 ? 1700000 : 2000000;
  }

  totalGaji() {
    return this.gajiPokok() + this.tunjangan() + this.tunjanganFungsional();
  }

  consoleLog() {
    console.log(`-------------------- Dosen --------------------------`);
    console.log(`ID = ${this.id}`);
    console.log(`NIDN = ${this.nidn}`);
    console.log(`Nama = ${this.nama}`);
    console.log(`Golongan = ${this.golongan}`);
    console.log(`Usia = ${this.getUsia()}`);
    console.log(`Gaji Pokok = ${this.gajiPokok()}`);
    console.log(`Tunjangan = ${this.tunjangan()}`);
    console.log(`Tunjangan Fungsional = ${this.tunjanganFungsional()}`);
    console.log(`Total Gaji = ${this.totalGaji()}`);
    console.log('-----------------------------------------------------');
  }

}

module.exports = Dosen;