
const Dosen = require('./Dosen');
const NonDosen = require('./NonDosen');

let arkan = new Dosen('01', 'dosen-01', 'arkan', 2, '2001-08-17');
arkan.consoleLog();

let fauzan = new Dosen('02', 'dosen-02', 'fauzan', 1, '1970-08-17');
fauzan.consoleLog();

let ayyasyi = new NonDosen('03', 'ayyasyi', 1, '1970-08-17');
ayyasyi.consoleLog();

let putra = new NonDosen('04', 'putra', 2, '2001-08-17');
putra.consoleLog();