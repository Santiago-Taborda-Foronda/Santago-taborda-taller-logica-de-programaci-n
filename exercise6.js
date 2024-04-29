function primeNum(num) {
  if (num <= 1) {
    return ("No es un numero primo");
  }

  if (num === 2) {
    return ("Es un numero primo");
  }

  if (num % 2 === 0) {
    return ("No es un numero primo");
  }

  let squareRoot = 1;
  while (squareRoot * squareRoot <= num) {
    squareRoot++;
  }
  squareRoot--;

  for (let i = 3; i <= squareRoot; i += 2) {
    if (num % i === 0) {
      return ("No es un numero primo");
    }
  }
  return ("El numero es primo");
}
console.log(primeNum(18)); 
