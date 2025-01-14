
class Orang {

  nama;
  tinggi;

  constructor(nama, tinggi){
    this.nama = nama;
    this.tinggi = tinggi;
  }

  getTB() {
    return this.tinggi;
  }

  getBBI() {
    return 0;
  }

}

module.exports = Orang;