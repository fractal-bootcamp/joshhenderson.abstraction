// // 1. Given the following functions, what is the output of`c(3, 4)` ?

// //     ```
// // a(x) = x + 1
// // b(y) = y * 2
// // c(x, y) = a(x) + b(y)
// // ```



// //1. 4 + 8 = 12


// 2. 

// f(g(h(x))) = f(g(2*x))
//             = f(2x +1)
//             =f(2x+1)(2x+1) or (2x+1)^2


// 3. Create a function `compose` that takes two functions as arguments and returns a new function that is the composition of the two functions. Use it to compose the functions `f` and `g`:

// ```
// f(x) = x + 1
// g(x) = x * 2
// ```

// f(g(x))= (x * 2) + 1

// function compose (x) {
// return (x * 2 + 1)
// }

// 4. function compose (x) {
// return(x * 3 + 5)^2
// }

// 5. function map (function, array) {
//     const newArray = array.map((e)=>{function(e) } )
//     return (newArray)

//     ) 
// }

// 6. 

// const doubleAndIncrease = (x) => { x*2+5}
// const array = [1,2,3,4,5]

// const result = map(doubleAndIncrease, array)

// console.log(result)

//7. Implement a `curry` function that converts a function taking multiple arguments into a sequence of functions each taking a single argument.

// Jake example
// type CurriedFn = (x: number, y: number, z: number) => number

// const add: CurriedFn = (x, y, z) => {
//     return x + y + z
// }

// const subtract: CurriedFn = (x, y, z) => {
//     return x - y - z
// }

// //how do i access the args of another function 
// function curry(funktion: CurriedFn) {
//     // currier(10)
//     return (first: number) => {
//         console.log(first)
//         // return this
//         return (second: number) => {
//             console.log(first, second)
//             return (third: number) => {
//                 console.log(first, second, third)
//                 // return funktion(10, second, third)
//                 const result = funktion(first, second, third)

//                 console.log(result)
//             }

//         }
//     }
// }

// function kurry(funktion: CurriedFn) {
//     return (first: number) => {
//         console.log(first) return (second: number) => {
//             console.log(first, second)
//             return (third: number) => {
//                 console.log(first, second, third)
//                 const result = funktion(first, second, third)
//                 console.log(result)
//             }
//         }
//     }
// }

// const currier = curry(add)
// const subcurry = curry(subtract)

// const [x, y, z] = [1, 2, 3]

// add(x, y, z)

// const ten = currier(10)
// const fifteen = ten(5)
// const eighteen = fifteen(3)
// const twenty = fifteen(5)

7.2



function curry2(funk) {
    return function (one) {
        return function (two) {
            return function (three) {
                return (
                    console.log(funk(one, two, three))
                )
            }
        }
    }
}

// 8. Use your `curry` function to create a curried version of the following function, and then use it to create a function that always adds 5 to its argument:

// ```

// ```
const add = (x, y) => x + y

function curry3(funk) {
    return function (one) {
        return function (two) {
            return (funk(one, two))
        }
    }
}


const curriedAdd3 = curry3(add)
const addFiver = curriedAdd3(5)

console.log(`add 5 test: ${addFiver(3)}`)
console.log(`add 5 test 2.0: ${addFiver(7)}`)

// ## Level 5: Abstractions with Objects and Classes

// 9. Implement a `Person` class with properties for name and age, and a method `introduce` that returns a string introduction. Then create a `Student` class that inherits from `Person` and adds a `study` method.

//defining the person class
class Person {
    constructor(public name: string, public age: number) { }

    introduce(): string {
        return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
    }
}

//defining the student class that inherit from Person
class Student extends Person {
    constructor(name: string, age: number, public major: string) {
        super(name, age);
    }

    study(): string {
        return `${this.name} is studying ${this.major}.`;
    }
}

//Usage

const person = new Person("Alice", 30);
console.log(person.introduce()); // should output Hi, I'm Alice and I'm 30 years old.

const student = new Student("Bob", 20, "Computer Science");
console.log(student.introduce()); // should output: Hi, I'm Bob and I'm 20 years old.
console.log(student.study()); // should output: Bob is studying Computer Science. 

//10 .Create a higher-order function createLogger that takes a prefix string and returns a new function. The returned function should take a message string and log it with the prefix.

type LoggerFunction = (message: string) => void;

function createLogger(prefix: string): LoggerFunction {
    return (function logger(message: string): void {
        console.log(`${prefix}: ${message}`);
    })
}

//useage

const errorLogger = createLogger("ERROR");
const infoLogger = createLogger("INFO");

errorLogger("Something went wrong")
infoLogger("Operation successful")

// 11. Implement the following higher-order functions:
// filter: Takes a predicate function and an array, returns a new array with only the elements for which the predicate returns true.
// reduce: Takes a reducer function, an initial value, and an array, and reduces the array to a single value.

function filterFunction(predicate, arr) {
    return arr.filter(predicate)
}

function reducerFunction(reducer, initial, arr) {
    return arr.reduce(reducer, initial);
}

//useage 

const isEven = (x: number): boolean => x % 2 === 0;
console.log(filterFunction(isEven, [1, 2, 3, 4, 5, 6]));

const sumReducer = ()


// 12. Use your filter and reduce functions to find the sum of all even numbers in the array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].

// 13. Create a memoize function that takes a function as an argument and returns a new function. 
// The new function should cache the results of the original function for each set of arguments it's called with.

// 14. Implement a simple aspect-oriented programming system with before and after advice. 
// Use it to add logging before and after a function call without modifying the original function.