function createGreeter(greeting: string) {
    return function (name: string) {
        console.log(`${greeting}, ${name}!`);
    }
}

const sayHello = createGreeter("hello");
const sayHowdy = createGreeter("howdy");

sayHello("Alice");
sayHowdy("Bob");

//
//
//

function curry(originalFunction: (x: number, y: number) => number) {
    return function (first: number) {
        return function (second: number) {
            return originalFunction(first, second);
        }
    }
}

const addd = (x: number, y: number) => x + y; // function that we pass into the first curry function 


const curriedAdd = curry(addd);
// curriedAdd now equals what curry(add) evaluates to or returns,  which is:

// function (first: number) {
//     return function (second: number) {
//         return originalFunction(first, second);



const addFive = curriedAdd(5);
// addFive is now equal to what curriedAdd(5) evaluates returns,  which is the equivelant of passing 5 as the arguement of the function that curry(add) returns which 
// looks like:

//  function (5) {
//      return function (second: number) {
//          return originalFunction(first, second)
//      }
//  }

// this means that curriedAdd5 evaluates to/ returns: 

// function (second:number) {
//     return originalFunction(first, second)
// }

console.log(addFive(3));  // Outputs: 8

// addfive(3) is equivelant to passing 3 to the function that curriedAdd(5) returns: 

// which looks like: 

// function (3) {
//     return originalFunction(first, second)
// }

// this evaluates to add(5, 3) because each prop is held in memory somewhere and then brought together through substitution here? 

// add(5,3) is itself a function call which returns 8 

// when 8 is returned 
