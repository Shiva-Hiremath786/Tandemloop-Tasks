class Calculator {
  calculate(a, b, operation) {
    a = parseFloat(a);
    b = parseFloat(b);

    switch (operation.toLowerCase()) {
      case 'add':
        return a + b;
      case 'subtract':
        return a - b;
      case 'multiply':
        return a * b;
      case 'divide':
        return b !== 0 ? a / b : "Error: Division by zero";
      default:
        return "Error: Invalid operation";
    }
  }
}