class Animal{
    constructor(name){
        this.name = name;
    }
    speak(){
        console.log(`${this.name} mengeluarkan suara`);
    }
}

class Dog extends Animal{
    constructor(name, age){
        super(name);
        this.age = age;
    }
    speak(){
        console.log(`${this.name} menggonggong!`);
    }
}

class Cat extends Animal{
    speak(){
        super.speak();
        console.log(`${this.name} mengeong!`)
    }
}

const dog1 = new Dog(`Heli`, 5);
console.log(dog1)

dog1.speak()

const cat1 = new Cat(`Kitty`);
cat1.speak()
console.log(cat1);