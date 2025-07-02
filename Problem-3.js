let input = prompt("Enter a number or 'x':");

if (input === 'x') {
  let result = [];
  for (let i = 1; i <= 99; i += 2) {
    result.push(i);
  }
  console.log("output :", result.join(", "));
} else {
  let a = parseInt(input);

  if (!isNaN(a) && a > 0) {
    let limit = (a % 2 === 0) ? a - 1 : a;
    let result = [];

    for (let i = 1; i <= limit; i += 2) {
      result.push(i);
    }

    console.log("output :", result.join(", "));
  } else {
    console.log("Invalid input! Please enter a number or 'x'.");
  }
}