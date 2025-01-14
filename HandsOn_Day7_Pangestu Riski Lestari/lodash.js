const _ = require("lodash");


// chunk
const data = [1,2,3,4,5,6,7,8];
const chunks = chunk(data, 3);
console.log(chunks);


// debounce
function onResize() {

  console.log("Window resized!");

}

window.addEventListener("resize", _.debounce(onResize, 100));

// difference
const data1 = [1,2,3,4,5,6,7,8];
const data2 = [1,3,4,5,9,10,11,12];
console.log(_.difference(data1, data2));

//asign
const obj1 = {a:1, b:2};
const obj2 = {b:3, c:4};
console.log(_.assign(obj1, obj2))




//filter data
const students = [
  {name: `Jhon`, score: 85},
  {name: `Alice`, score: 92},
  {name: `Bob`, score: 75},
  {name: `Charlie`, score: 65}
]

const highScore = _.filter(students, (student)=>{
  return student.score > 80;

})
console.log(`High Score: `, highScore);

const groupByScore = _.groupBy(students, (student)=>{
  return student.score;

})
console.log(`Group`, groupByScore);