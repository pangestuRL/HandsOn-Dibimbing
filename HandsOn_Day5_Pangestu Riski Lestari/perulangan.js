// FOR

//mudah
for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
  // Output: 1, 2, 3, ..., 10

  
  //sedang
  function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  
  for (let i = 1; i <= 20; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
  // Output: 2, 3, 5, 7, 11, 13, 17, 19

  
  //sulit
  let rows = 5;

for (let i = 1; i <= rows; i++) {
  let pyramidRow = '';
  // Tambahkan spasi di awal
  for (let j = 1; j <= rows - i; j++) {
    pyramidRow += ' ';
  }
  // Tambahkan bintang
  for (let k = 1; k <= 2 * i - 1; k++) {
    pyramidRow += '*';
  }
  console.log(pyramidRow);
}

// Output:
//     *
//    ***
//   *****
//  *******
// *********




//switch

//mudah
let i = 1;

while (i <= 10) {
  console.log(i);
  i++;
}
// Output: 1, 2, 3, ..., 10


//sedang
const secretNumber = 7; // Angka rahasia
let guess = null;

while (guess !== secretNumber) {
  guess = parseInt(prompt("Guess the secret number (between 1 and 10):"), 10);
  if (guess === secretNumber) {
    console.log("Congrats! You guessed the correct number.");
  } else {
    console.log("Wrong guess. Try again!");
  }
}
// Output: Hingga angka benar ditebak.


//sulit
function getValidNumber() {
    let number;
  
    while (true) {
      const input = prompt("Enter a positive number:");
      number = parseFloat(input);
  
      if (!isNaN(number) && number > 0) {
        break;
      } else {
        console.log("Invalid input. Please enter a valid positive number.");
      }
    }
  
    return number;
  }
  
  const validNumber = getValidNumber();
  console.log("You entered:", validNumber);
  