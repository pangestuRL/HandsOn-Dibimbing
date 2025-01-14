class Car {
    constructor(name, model, weight, color) {
        this.name = name;
        this.model = model;
        this.weight = weight;
        this.color = color;
    }

    start(){
        console.log(`Starting!`);
    }

    showName(){
        console.log(this.name)
    }
}

const car1 = new Car(`Fiat`, `500`, `180kg`, `white`);
console.log(car1);

car1.start();
car1.showName();

console.log(`=============================================`);

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greet(){
        console.log(`Hi! My name is ${this.name}, I am ${this.age} years old`);
    }
}

const doni = new Person(`Doni`, 38);
console.log(doni);
doni.greet();

console.log(`=============================================`);

class Student{
    constructor(nama, nilaiUjian){
        this.nama = nama;
        this.nilaiUjian = nilaiUjian;
        this.rataNilaiUjian = 0;
    }

    hitungRataNilaiUjian(){
        const totalNilaiUjian = this.nilaiUjian.reduce((a,b) => a + b)
        this.rataNilaiUjian = totalNilaiUjian / this.nilaiUjian.length
    }
}

const eko = new Student(`Eko`, [50, 100, 30]);
eko.hitungRataNilaiUjian();
console.log(eko);