// 1. Promises
/*
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = [
                { id: 1, name: 'Ram', age: 10 },
                { id: 2, name: 'Hari', age: 20 },
                { id: 3, name: 'Shyam', age: 30 }
            ];
            resolve(data);
        }, 2000);
    });
}

// 2. Closures

function createCounter() {
    let count = 0;
    return {
        increment: function() {
            count++;
        },
        getCount: function() {
            return count;
        }
    };
}

// 3. Callbacks

const numbers = [1, 2, 3, 4, 5];

let square = processData(numbers, number => number ** 2);

console.log("Original numbers:", numbers);
console.log("Squared numbers:", square);

// 4. Async/Await

async function fetchDataAsync() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = [
                { id: 1, name: 'Ram', age: 10 },
                { id: 2, name: 'Shyam', age: 20 },
                { id: 3, name: 'Hari', age: 30 }
            ];
            resolve(data);
        }, 1000);
    });
}

// 5. Array Manipulation: Map

const number = [10,20,30,40,50];

const mapnumber = number.map((num) => num *2);
console.log(mapnumber);

// 6. Array Manipulation: Filter

const filternumber = number.filter((num) => num >=10);
console.log(filternumber);

// 7. Array Manipulation: Find

const findnumber = number.find((num)=> num > 15);
console.log(findnumber);

// 8. Array Manipulation: Reduce

function sum(...numbers){
    return numbers.reduce((sum, Number) => sum + Number, 0);
}
console.log(sum(1,2,3,4));

// 9. Object Manipulation



// 10. Classes and Objects

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    info() {
        return (`Hello, ${this.name} whose age is ${this.age}`);
    }
}
const person1 = new Person("Ram", 10);
console.log(person1.info());


// 11. Inheritance

class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
    study() {
        return `${this.name} is studying.`;
    }
}

const student1 = new Student("Ram", 10, "A+");
console.log(student1.study());

*/
//12. Error Handling with Promises

function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() < 0.5 ? reject("Failed to fetch data") : resolve([
                { id: 1, name: 'Ram', age: 10 },
                { id: 2, name: 'Hari', age: 20 },
                { id: 3, name: 'Shyam', age: 30 }
            ]);
        }, 1000);
    });
}



fetchData().then((message)=> {
    console.log(message);
}).catch((error)=>{
    console.log(error);
});

// ***************************************************


//13. Error Handling with Async/Await


/*

// Conceptual Questions

// 1. JavaScript utilizes promises to deal with asynchronous operations in an easier way, hence keeping things more efficient.

1. Better Readability: A promise supports chaining for asynchronous operations via the syntax .then(), which keeps the code more understandable and readable.
2. Error Handling: Promises provide a kind of standardized method for error handling through .catch(), which improves error handling over ad hoc error handling inside callback functions.
3. Avoiding Callback Hell: Promises help avoid the problem of callback hell, where several nested callback functions can lead to unreadable and unmaintainable code.
4. Support for Async/Await: With promises, there is support for both sequential and parallel execution of asynchronous tasks, hence support for flexibility in the handling of complex asynchronous scenarios.

//2.  Closure can be defined as inner function has access to the other(outer) variables function.

function Person(name, age){

    this.name = name;
    this.age = age;
}

let john = new Person("Ram", 5);

console.log(john);

// 3. Callback function is a function passed as an argument to another function. It is used in JavaScript for asynchronous operations to handle the result of an asynchronous task once it is completed.

// 4. async/await is used to minimize code as well as for more readablity that allows writing asynchronous code in a synchronous.

// 5. 

-JS

. It supports primitive data types that are string, number, boolean, null, and undefined. 	
. There is only one way to define the variables by using the var keyword.

- ES6

.There are some additions to JavaScript data types. It introduced a new primitive data type ‘symbol’ for supporting unique values.
.There are two new ways to define variables that are let and const.

// 6. Some major features introduced in ES6 include:

1. Arrow functions
2. Template literals
3. Destructuring assignment
4. Default parameters
5. Rest parameters
6. Spread syntax
7. Classes
8. Promises
9. let and const for variable declarations
10. Modules

*/