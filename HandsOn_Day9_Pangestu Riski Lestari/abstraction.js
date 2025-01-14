class Vehicle {
    start() {
      throw new Error("This method must be overridden.");
    }
  
    stop() {
      throw new Error("This method must be overridden.");
    }
  }
  
  class Bicycle extends Vehicle {
    start() {
      console.log("pedaling ...");
    }
  
    stop() {
      console.log("stop pedalling ...");
    }
  }
  
  class Car extends Vehicle {
    start() {
      console.log("engine start ...");
    }
  
    stop() {
      console.log("engine stopped ...");
    }
  }
  
  const vehicle = new Vehicle();
  // vehicle.stop();
  
  const polygon = new Bicycle();
  polygon.start();
  
  const honda = new Car();
  honda.stop();
  