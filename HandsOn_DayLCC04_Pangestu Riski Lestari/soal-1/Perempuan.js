const Orang = require('./Orang');

class Perempuan extends Orang {

  constructor(nama, tinggi){
    super(nama, tinggi);
  }

  getBBI(){
    return (this.getTB() - 100) - ((this.getTB() - 100) * 15/100) ;
  }

}

module.exports = Perempuan;