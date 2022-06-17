let age = 25;

// if age is greater than or equal to 25,
if (age >= 25) {
  console.log("Renting a car is more affordable.");
} else {
  // else: age is less than 25
  console.log("Renting a car is very expensive.");
}

// chaining if statements: if - else if - ... - else

// if age is greater than or equal to 25,
if (age >= 25) {
  console.log("Renting a car is more affordable.");

  // if age is less than 25 but greater than or equal to 18
} else if (age >= 18) {
  console.log("Renting a car is very expensive.");

  // if age is less than 18
} else {
  console.log("You cannot legally rent a car.");
}
