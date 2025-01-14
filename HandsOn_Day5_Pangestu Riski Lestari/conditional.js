// If statement

// mudah
let nilai = 75

if (nilai >= 80){
    console.log(`Anda lulus dengan baik!`)
}else{
    console.log(`Anda perlu belajar lebih giat!`)
}

//sedang
const score = 85;

if (score > 90) {
  console.log('Selamat, Anda mendapatkan nilai A!')
} else if (score > 80) {
  console.log('Selamat, Anda lulus ujian!')
} else {
  console.log('Maaf, Anda belum lulus ujian.')
}


//sulit
function checkGrades(grades) {
    for (let i = 0; i < grades.length; i++) {
      if (typeof grades[i] !== 'number') {
        throw new Error('Invalid input. Please provide an array of numbers.')
      }
  
      const grade = grades[i]
      let predicate
  
      if (grade >= 90) {
        predicate = 'A'
      } else if (grade >= 80) {
        predicate = 'B'
      } else if (grade >= 70) {
        predicate = 'C'
      } else if (grade >= 60) {
        predicate = 'D'
      } else {
        predicate = 'E'
      }
  
      console.log(`Grade ${i + 1}: ${grade} (${predicate})`)
    }
  }
  
  try {
    const studentGrades = [95, 85, 65, 80, 70]
    checkGrades(studentGrades)
  } catch (e) {
    console.error(e)
  }







//switch case
// mudah
const fruit = 'apple'

switch (fruit) {
  case 'banana':
    console.log('I am a banana.')
    break;
  case 'apple':
    console.log('I am an apple.')
    break;
  case 'orange':
    console.log('I am an orange.')
    break;
  case 'strawberry':
    console.log('I am a strawberry.')
    break;
  default:
    console.log('I am not a fruit. I am a programmer.')
}


//sedang
function getGrade(score) {
  switch (true) {
    case score >= 90 && score <= 100:
      return 'A';
    case score >= 80 && score < 90:
      return 'B';
    case score >= 70 && score < 80:
      return 'C';
    case score >= 60 && score < 70:
      return 'D';
    case score >= 0 && score < 60:
      return 'F';
    default:
      return 'Invalid Score';
  }
}

console.log(getGrade(85)); // Output: B
console.log(getGrade(45)); // Output: F
console.log(getGrade(101)); // Output: Invalid Score



//sulit
function calculate(num1, num2, operator) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num2 !== 0 ? num1 / num2 : "Error: Division by zero";
    case '%':
      return num2 !== 0 ? num1 % num2 : "Error: Division by zero";
    default:
      return "Invalid operator. Please use +, -, *, /, or %.";
  }
}

console.log(calculate(10, 5, '+')); // Output: 15
console.log(calculate(10, 5, '/')); // Output: 2
console.log(calculate(10, 0, '/')); // Output: Error: Division by zero
console.log(calculate(10, 5, '^')); // Output: Invalid operator. Please use +, -, *, /, or %.
