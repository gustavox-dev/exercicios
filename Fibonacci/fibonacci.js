const valueFibonacci = 10;

function execute() {
  for (let i = 0; i < valueFibonacci; i++) {
    fibonacci(i);
    console.log(fibonacci(i) + " ");
  }
}

function fibonacci(n) {
  return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

execute()