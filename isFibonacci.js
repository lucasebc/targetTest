function isFibonacci(n) {
  let fibonacci = [0, 1];

  while (fibonacci[fibonacci.length - 1] < n) {
    fibonacci.push(fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2]);
  }

  if (n === fibonacci[fibonacci.length - 1] || n === 0) return `O número ${n} pertence à sequência de Fibonacci.`;

  return `O número ${n} NÃO pertence à sequência de Fibonacci.`;
}

const n = parseInt(process.argv[2]);

const result = isFibonacci(n);

console.log(result);
