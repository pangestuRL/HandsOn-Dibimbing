// const car1 = {
//     name: `Fiat`,
//     model: `500`,
//     weight: `180kg`,
//     color: `white`,
//     start: function(){
//         console.log(`Starting!`);
//     }
// };

// const car2 = {
//     name: `Avanza`,
//     model: `All new`,
//     weight: `200kg`,
//     color: `black`,
//     start: function(){
//         console.log(`Starting!`);
//     }
// };

function Car(name, model, weight, color){
    this.name = name;
    this.model = model;
    this.weight = weight;
    this.color = color;
    this.start = function (){
        console.log(`Starting!`);
    };
}

const car1 = new Car(`Fiat`, `500`, `180kg`, `white`);
console.log(car1);
const car2 = new Car(`Avanza`, `All new`, `200kg`, `black`);
console.log(car2);