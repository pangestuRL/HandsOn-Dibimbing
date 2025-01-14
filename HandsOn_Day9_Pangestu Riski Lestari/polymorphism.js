class Vehicle{
    move(){
        console.log(`The vehicle is moving`);
    }
}

class Car extends Vehicle{
    move(){
        console.log(`The car is moving!`);
    }
}

class Bike extends Vehicle{
    move(){
        console.log(`The bike is moving!`);
    }
}

const polygon = new Bike();
polygon.move();