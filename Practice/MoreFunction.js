function sayHello(name, age){
    console.log (`Hello ${name} you are ${age} years old`)
}

const greetMin0 = sayHello("Min0", 21);


const calculator = {
    plus: function(a, b){
        return a + b;
    },
    minus: function(a, b){
        return a - b;
    },
    multi: function(a, b){
        return a * b;
    },
    divi: function(a, b){
        return a / b;
    },
    square: function(a, b){
        return a ** b;
    }
}
const plus = calculator.plus(5, 5);
const minus = calculator.minus(5, 5);
const multi = calculator.multi(5, 5);
const divi = calculator.divi(5, 5);
const square = calculator.square(5, 5);
console.log(plus, minus, multi, divi, square);