// Given the following functions, what is the output of c(3, 4)?
// a(x) = x + 1
// b(y) = y * 2
// c(x, y) = a(x) + b(y)

/*
c(3,4) = a(3) + b(4)

= (3+1) + (4*2)

= 4+ 8

=12

*/

//2. Rewrite the following nested function calls as a single expression:
/*
f(g(h(x)))

where:
f(x) = x^2
g(x) = x + 1
h(x) = 2x

(2x+1)**2
 */

// 3. Create a function compose that takes two functions as arguments and returns a new function that is the composition of the two functions.
//Use it to compose the functions f and g:

/**
f(x) = x + 1
g(x) = x * 2
*/

function x(x) {
  return x + 1;
}
function l(x) {
  return x * 2;
}

function compose(x, y) {
  const inner = (z) => {
    return x(y);
  };
  return inner;
}

const test = compose(x, l);

console.log(test(3));

//4. Using the compose function from the previous question, create a new function that triples a number, adds 5, and then squares the result.

const triple = (x) => {
  x * 3;
};
const add_five = (x) => {
  x + 5;
};
const square = (x) => {
  x ** 2;
};

const result = compose(square, compose(add_five, triple));

console.log(result(2));

// 5. Implement a function map that takes a function and an array as arguments, and returns a new array with the function applied to each element.

const map2 = (funk, arr: number[]): number[] => {
  return arr.map((e) => {
    return funk(e);
  });
};

// const map3 = (funk, arr: number[]) => {
//     let array = []

//     arr.forEach(element => {
//         array.push(funk(element))
//     });

//     return array;
// }

const double = (x) => x * 2;

const result2 = map2(double, [1, 2, 3, 4, 5]);

console.log("is this running", result2);

//6. Use your map function to create a new array where each number in [1, 2, 3, 4, 5] is doubled and then increased by 3.

const double_and_add_three = (x) => {
  return x * 2 + 3;
};

const result3 = map2(double_and_add_three, [1, 2, 3, 4, 5]);

console.log(double_and_add_three(3));
console.log(result3);

//7. Implement a curry function that converts a function taking multiple arguments into a sequence of functions each taking a single argument.

// const curry4 = (funk) => {
//     const curried = (...funk) => {
//         return

//     }

//     return (
//     )
// }

//8. Use your curry function to create a curried version of the following function, and then use it to create a function that always adds 5 to its argument:

//9.Implement a Person class with properties for name and age, and a method introduce that returns a string introduction. Then create a Student class that inherits from Person and adds a study method.

class Person1 {
  constructor(public name: string, public age: number) {}

  introduce(): string {
    return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
  }
}

class Student1 extends Person1 {
  constructor(name: string, age: number, public major: string) {
    super(name, age);
  }

  study(): string {
    return `${this.name} is studying ${this.major}.`;
  }
}

const person1 = new Person1("Alice", 30);
console.log(person1.introduce()); //Hi, I'm Alice and I'm 30 years old

const student2 = new Student1("Bob", 20, "Computer Science");
console.log(student2.introduce()); //Hi, I'm Bob and I'm 20 years old.
console.log(student2.study()); //Bob is studying Computer Science

//10. Create a higher-order function createLogger that takes a prefix string and returns a new function. The returned function should take a message string and log it with the prefix.

type LoggerFunction2 = (message: string) => void;

function createLogger2(prefix: string): LoggerFunction2 {
  return function logger(message: string): void {
    console.log(`${prefix}: ${message}`);
  };
}

//output:
const errorLogger2 = createLogger2("Error");
const infoLogger2 = createLogger2("Info");

errorLogger2("Somthing went wrong");
infoLogger2("Operation successful");

/**
 * 11. Implement the following higher-order functions:
filter: Takes a predicate function and an array, returns a new array with only the elements for which the predicate returns true.
reduce: Takes a reducer function, an initial value, and an array, and reduces the array to a single value.
 */

function filterFunction2(predicate, arr) {
  return arr.filter(predicate);
}

function reducerFunction2(reducer, initial, arr) {
  return arr.reduce(reducer, initial);
}

//useage

const isEven2 = (x: number): boolean => x % 2 === 0;
console.log(filterFunction2(isEven2, [1, 2, 3, 4, 5, 6]));

const sumReducer2 = (accumulator, element) => {
  return accumulator + element;
};
console.log(reducerFunction2(sumReducer2, 0, [1, 2, 3, 4, 5]));
//12. Use your filter and reduce functions to find the sum of all even numbers in the array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = filterFunction2(isEven2, numbers);
const sum_of_evens = reducerFunction2(sumReducer2, 0, evenNumbers);
console.log("adwfsdfasdfas", sum_of_evens);

//13. Create a memoize function that takes a function as an argument and returns a new function.
//The new function should cache the results of the original function for each set of arguments it's called with.

type AnyFunc = (...args:any[]) => any;

function memoize<T extends AnyFunc>(func:T): T {
  const cache = new Map<string, ReturnType<T>>();

  return function(...args: Parameters<T>): {
    const key = JSON.stringify(args);
    if(cache.has(key)) {
      return cache.get(key)!;
    }
    const result = func(...args):
    cache.set(key, result);
    return result;
  } as T;
} 

const fibonacci = memoize((n: number): number => {
  if (n<2) return n;
  return fibonacci(n-1) = fibonacci(n-2);
});

console.log(fibonacci(100));
//14.Implement a simple aspect-oriented programming system with before and after advice.
//Use it to add logging before and after a function call without modifying the original function.


type BeforeAdvice = (functionName: string, args: any[], kwargs: Record<string, any>) => void;
type AfterAdvice = (functionName: string, result:any)=> void;

type AnyFunction = (...args: any[])=> any;

//The main aspect function that creates a decorator
function aspect(before?: BeforeAdvice, after: AfterAdvice) {
  //return a decorator function 
  return function decorator(target: AnyFunction, context: ClassMethodDecoratorContext) {
    // The 'wrapped' function that will replace the original method
    function wrapped(this: any, ...args: any[]): any {
      //extract kwargs (named arguments) if the last argument is and object
      const kwargs: Record<string, any> = (args.length > 0 && typeof args[args.length - 1]==='object')
      ? args.pop()
      :{};

      //execute 'before' advice if provided
      if (before) {
        before(context.name as string, args, kwargs);
      }

      //call the original function 
      const result = target.apply(this, [...args, kwargs]);

      if(after) {
        after(context.name as string, result);
      }

      // return the result of the original function 
      return result;
    }
    // return the wrapped function
    return wrapped;
  };
}

const beforeAdvice: BeforeAdvice = (functionName, args,kwargs) => {
  console.log(`Before calling ${functionName} with args ${JSON.stringify(args)} and kwargs ${JSON.stringify(kwargs)}`);
};

const afterAdvice: AfterAdvice = (functionName, result) => {
  console.log(`Adter calling ${functionName}, got result ${JSON.stringify(result)}`);
};

// Example class with a method using the aspct decorator 
class Greeter {
  @aspect(beforeAdvice, afterAdvice)
  greet(name: string): string {
    return `Hello, ${name}!`;
  }
}

// create an instance of the greeter class 
const greeter = new Greeter();

// call the greeter method 
console.log( greeter.greet("Alice"));
