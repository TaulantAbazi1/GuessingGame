let maximum = parseInt(prompt("Enter your maximum number..."));

while (!maximum) {
  maximum = parseInt(prompt("Enter a valid number..."));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let guess = prompt("Enter your first guess! (Type 'q' to quit the game!)");
let attempts = 1;

while (parseInt(guess) !== targetNum) {
  if (guess === "q") break;
  guess = parseInt(guess);

  if (guess > targetNum) {
    guess = prompt("Too high! Enter a new guess!");
    attempts++;
  } else if (guess < targetNum) {
    guess = prompt("Too low! Enter a new guess!");
    attempts++;
  } else {
    guess = prompt("Invalid guess. Please enter a number or 'q' to quit");
  }
}

if (guess === "q") {
  alert("YOU QUIT!");
} else {
  alert(`You got it! It took you ${attempts} guesess!`);
}
