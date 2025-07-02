let input = prompt("Enter a number or 'x':");

let a = input === 'x' ? 50 : parseInt(input);  // if input is x, take 50, else convert input to number

if (!isNaN(a) && a > 0) {
  let result = [];
  for (let i = 0; i < a; i++) {
    result.push(2 * i + 1); // formula for odd numbers
  }
  console.log(result.join(", "));
} else {
  console.log("Invalid input!");
}