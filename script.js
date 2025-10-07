function greeting(name) {
    return `Hello, ${name}!`;
}

console.log(greeting("Kristine"));

function addNumbers(num1, num2) {
    return num1 + num2;
}

addNumbers(6, 40);
console.log(addNumbers(6, 40));

let x = 10;
function changeValue() {
    return x = 50;

}
console.log(changeValue(x));

function outerFunction() {
    let count = 0;
    return function() {
        count++;
        return count;
    }

}

console.log("current count: " + 5);


function greeting(name="user") {
    return `Hello, ${name}!`;

}

console.log(greeting());