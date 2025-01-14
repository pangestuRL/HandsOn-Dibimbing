const _ = require("lodash");

const users = [

    { name: "Alice", age: 25, city: "New York", score: 85 },
    { name: "Bob", age: 30, city: "Los Angeles", score: 90 },
    { name: "Charlie", age: 35, city: "New York", score: 95 },
    { name: "David", age: 40, city: "Chicago", score: 70 },
    { name: "Eve", age: 28, city: "Los Angeles", score: 88 },
  
  ];

//   //group by city
const groupByCity = _.groupBy(users, `city`);
    console.log(groupByCity);

// hitung rata-rata per kota
const averageScoresByCity = _.mapValues(groupByCity, (cityUsers)=>{
    return _.meanBy(cityUsers, `score`);
  
  });
  console.log(averageScoresByCity);