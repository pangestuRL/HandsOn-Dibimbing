const Orang = require('./Orang');

class LakiLaki extends Orang {

  constructor(nama, tinggi){
    super(nama, tinggi);
  }

  getBBI(){
    return (this.getTB() - 100) - ((this.getTB() - 100) * 10/100) ;
  }

}

module.exports = LakiLaki;