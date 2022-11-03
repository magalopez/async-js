function sum (num, num2) {
  return num + num2;
}

function calc(num1, num2, operation) {
  return operation(num1, num2);
}

console.log(calc(2, 2, sum));

// Set Time Out

setTimeout(function () {
  console.log("Hola mundo");
}, 5000);

function grettin (name) {
  console.log(`Hola ${name}`);
}

setTimeout(grettin, 2000, 'maga');