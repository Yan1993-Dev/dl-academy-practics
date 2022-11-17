// Задание 1
const getName1 = function(name) {
    return `Имя равно ${name}`;
}

function getName2(name) {
    return `Имя равно ${name}`;
}

const getName3 = (name) => `Имя равно ${name}`;

console.log('getName1', getName1('getName1'));
console.log('getName2', getName2('getName2'));
console.log('getName3', getName3('getName3'));


// Задание 2
function fib(n) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
      let c = a + b;
      a = b;
      b = c;
    }
    return b;
  }
  
  console.log( fib(3) ); // 2
  console.log( fib(7) ); // 13
  console.log( fib(77) ); 