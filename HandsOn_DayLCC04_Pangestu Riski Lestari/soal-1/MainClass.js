const LakiLaki = require('./LakiLaki');
const Perempuan = require('./Perempuan');

let cowo_1 = new LakiLaki("Arkan", 165);
console.log({
  class : 'LakiLaki',
  tinggi : cowo_1.getTB(),
  bbi: cowo_1.getBBI()
});

let cewe_1 = new Perempuan("Jaida", 165);
console.log({
  class : 'LakiLaki',
  tinggi : cewe_1.getTB(),
  bbi: cewe_1.getBBI()
});

