const student = [
    {name: `jhon`, score: 85},
    {name: `alice`, score: 93},
    {name: `bob`, score: 75},
    {name: `charlie`, score: 92}
]

//mencari siswa dengan nilai tertinggi
const topStudent = student.reduce((prev, curent)=>{
    return prev.score > curent.score ? prev : curent
})

console.log(`Top student`, topStudent);

//mengurutkan student berdasarkan nilai
const sortedStudent = student.sort((a, b) => a.score - b.score);
console.log(`Sorted Student`, sortedStudent);