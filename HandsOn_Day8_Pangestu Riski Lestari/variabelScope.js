const data = require(`./export.js`);

let globalVar = `I'm global!`;

data.nama = `Ihsan`;


function myFunction(argument){
    let functionVar = `I am function variable!`;
    var varVariable = `I am variable var!`;

    if (argument){
        let blockVar = `I am block variable!`;
        console.log(
            `inside if block: `+ globalVar + `,` + functionVar + `,` + blockVar
        );
    }else{
        let blockVar = `I am block variable in else!`;
        var varVariable = `I am var variable in else!`;

        console.log(
            `inside if block: `+ globalVar + `,` + functionVar + `,` + blockVar
        );
    }
    console.log(
        `inside function: `+ globalVar + `,` + functionVar + `,` + varVariable
    );
    globalVar = `Change global variable inside function`;

}

myFunction(false);
console.log(`Outside Function: ` + globalVar);

console.log(data);