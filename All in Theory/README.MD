# Primitive Datatypes
    - In js, Primitive values or data types is data that is not an Object and has no methods and or properties.
    - It can hold only single value
    - primitive data types—like numbers, strings, and booleans—do not inherently hold properties or methods because they are not objects
    - they appear to have methods and properties due to a feature called boxing.
    - When you call a method on a primitive type, JavaScript temporarily wraps the primitive in a corresponding object wrapper (a process known as boxing). This wrapper object provides methods that you can use with the primitive value.
    - Once the operation is complete, the wrapper is discarded, and you are left with the primitive value.
    - Example:
        let greeting: string = "Hello";
        console.log(greeting.toUpperCase());  // Converts all letters to uppercase
    - Boxing is a temporary wrapping of primitive values in object wrappers, which provides access to methods and properties.
## List of Primitive Datatypes is:
    - String
    - Number
    - Booliean
    - Undefined
    - Bigint 
    - Symbol
    - Null

# Non Primitive Datatypes
    - Datatypes that are object, and hold multiple values, and have properties and mrthods.
## List of Non Primitive Datatypes
    - Objects
    - Array
    - Tupple
    - Functions
    - Enum
    - Interface
    -Example:
        let var1: number[] = [1, 2, 3, 4]
        let var2: string[] = ["Hello", "World"]
        let var3: any[] = [1, "Hello", 2, "World"]
        let Obj = {
            "key1" : "Value1",
            "Key2" : "Value2" 
        }

# Strongly Typed Syntax
    - In Strongly Typed Syntax, you explicetly set the type of variable, function, or return type of a function.
    - Strongly typed syntax in TypeScript ensures that if you try to assign a value of a different data type to a variable, function parameter, or return value, the compiler will raise an error at compile-time, preventing the code from compiling.
    - This helps catch errors early in the development process, making the code more maintainable, scalable, and less prone to type-related bugs.
    - For Example:
        let name: string = "Shahmeer"
        name = 12, here it will throw an error because while declaring the variable name, we have set the type string. And we can not assign a number value to it..
    - We can not chnage it's type witout explicit casting..

# Type Inference 
    - In Type Inference we do not set the type of variable explicetly, but while initializing the value to a variable, it automatically set the type of variable according the to initial value type.
    - For example:
        let age = 22, here type is set to number
        age = "Twenty-Two", here also it will throw an error, because it implicetly set the value of type number while initiall value. 

# different b/w let, var, and const

## let:
    - let declares a variable that has a block scope (e.g., inside an if statement or a for loop).
    - It can be updated but not redeclared within the same scope.
    - It is not hoisted to the top of the scope, so it must be declared before it is used.
    - For Example:
        function demoLet() {
            console.log(i); // Error: Cannot find name 'i' because it is not hoisted
            if (true) {
                let i = "Hello, world!";
                console.log(i); // Output: Hello, world!
            }
            console.log(i); // Error: 'i' is not accessible here because it's outside the block
        }

        demoLet();

        function redeclareTest() {
            let j = 10;
            console.log(j); // Output: 10
            let j = 20; // Error: Identifier 'j' has already been declared
        }

        redeclareTest();

        function updateTest() {
            let k = 15;
            console.log(k); // Output: 15
            k = 20;
            console.log(k); // Output: 20
        }

        updateTest();


## const:
    - const is similar to let in terms of scope and hoisting behavior, but it has some additional characteristics:
    - const declares a constant variable that cannot be reassigned/change
    - It has block scope, just like let.
    - It is not hoisted to the top of the scope, so it must be declared before it is used.
    - Once a value is assigned to a const variable, it cannot be changed.
    - const variables must be initialized when they are declared.
    - Example:
        const PI = 3.14;
        PI = 42; // Error: Assignment to constant variable.
    - Note that const only makes the variable itself immutable, not the value it holds. If the value is an object or an array, its properties or elements can still be modified.
    - Example:
        const person = { name: 'John' };
        person.name = 'Jane'; // This is allowed
    - But reassigning the person variable itself would result in an error:
    - Example:
        person = { name: 'Jane' }; // Error: Assignment to constant variable.
## var:
    - var declares a variable that has a function scope.
    - It can be redeclared and updated.
    - It is hoisted to the top of the scope, meaning it is moved to the top of the script regardless of where it is declared.
    - Example:
        1.  console.log("Value of y1 is: ", y1)     //Value of y1 is: undefined
            var y1 = 10                             //It will work correctly
            console.log("Value of y1 is: ", y1)     //Value of y1 is: 10

        2.  console.log(y2)                         Encounter Error
            var y2: number = 20
                - When we add a type annotation, TypeScript enables a feature called "definite assignment assertion". This means that TypeScript will error if a variable is used before it's been assigned a value.
                - In above case, since y2 has a type annotation : number, TypeScript is enforcing definite assignment assertion, and since y2 is used before it's been assigned a value, it throws an error.
                - If you remove the type annotation : number from y2, the error will go away, and you'll see the familiar undefined behavior.
                - So, in short, the error is due to the combination of var hoisting and the : number type annotation, which enables definite assignment assertion.


# Hoisting:
    - In JavaScript and TypeScript, hoisting refers to the behavior of moving the declaration of a variable or function to the top of its scope, regardless of where it is actually written in the code.
    - In other words, when a variable or function is declared, it is "hoisted" to the top of its scope, making it accessible from anywhere within that scope, even before it is actually declared.
    - Here's an example:
        console.log(x); // prints undefined
        var x = 10;
    - Even though the console.log statement comes before the declaration of x, the variable x is still accessible because it is "hoisted" to the top of the scope.
    - Note that hoisting only moves the declaration, not the assignment. So in the example above, x is declared at the top, but it is still assigned the value 10 only after the var x = 10 statement.
    - Hoisting can sometimes lead to unexpected behavior, especially when using var declarations. That's one of the reasons why let and const were introduced in modern JavaScript, as they do not have the same hoisting behavior as var.

# Modules
In TypeScript, modules are a powerful feature that helps in organizing and structuring code, especially in large applications.
    - In TypeScript, just as in ECMAScript 2015, any file containing a top-level import or export is considered a module.
    - Conversely, a file without any top-level import or export declarations is treated as a script whose contents are available in the global scope (and therefore to modules as well).
    - If you have a file that doesn’t currently have any imports or exports, but you want to be treated as a module, add the line: export {};

## Modules in TypeScript
    - There are three main things to consider when writing module-based code in TypeScript:
        - Syntax: What syntax do I want to use to import and export things?
            - In TypeScript, you can use ES6-style/ECMAScript syntax for importing and exporting modules. This is the most common and recommended approach.
            - Example:  

                ES, ES6 or ECMAScript Syntax:
                // module.js
                export const name = "ES6 Module";
                export function greet(user) {
                return `Hello, ${user}!`;
                }

                // app.js
                import { greet, name } from './module.js';
                OR
                import * as data from './module.js';
                here we will access variables or fun like this: data.greet(), data.name

                console.log(name); // Outputs: ES6 Module
                console.log(greet('Shahmeer')); // Outputs: Hello, Shahmeer!

                CommonJs Syntax:
                export.ts
                function absolute(num: number) {
                if (num < 0) return num * -1;
                return num;
                }
                
                module.exports = {
                    pi: 3.14,
                    squareTwo: 1.41,
                    phi: 1.61,
                    absolute,
                };

                Import.ts
                const maths = require("./maths");
                maths.pi;


        - Module Resolution: What is the relationship between module names (or paths) and files on disk?
            - Node Resolution
            - Classic Resolution (Yet to study in depth)
        - Module Output Target: What should my emitted JavaScript module look like?
            - The module output target determines the module system for the JavaScript output by the TypeScript compiler. Common output targets include:
                - CommonJS (CJS): Useful for Node.js applications.
                - ES Modules (ESM): Suitable for modern browsers and tooling.
                - AMD, UMD, SystemJS: Other formats used in specific environments.
                - You specify the module target in your tsconfig.json:
                -   {
                        "compilerOptions": {
                            "module": "commonjs"
                        }
                    }

# Chalk (yet to study in depth: Chalk Levels etc)
    - npm install chalk
    - const chalk = require('chalk');
        console.log(chalk.bold.italic.yellow("Hello, Yellow Chalk in blod italic style"))
    - Chalk comes with an easy to use composable API where you just chain and nest the styles you want.
    - Chalk is a popular library for styling terminal output in Node.js. The "composable API" refers to a way of combining styles together in a flexible and readable way.
    - Think of it like building with LEGO blocks! You can create complex styles by combining smaller, individual styles.
    - Chalk's composable API makes it easy to create complex styles by combining smaller styles in a readable and flexible way!
    - Chain styles and call the last one as a method with a string argument. Order doesn't matter, and later styles take precedent in case of a conflict. This simply means that chalk.red.yellow.green is equivalent to chalk.green.

# Union Types/Literals:
    - The first way to combine types you might see is a union type. A union type is a type formed from two or more other types, representing values that may be any one of those types. We refer to each of these types as the union’s members.
    - TypeScript will only allow an operation if it is valid for every member of the union. For example, if you have the union string | number, you can’t use methods that are only available on string:
    - For example:
        function printId(id: number | string) {
            console.log(id.toUpperCase());
            //Property 'toUpperCase' does not exist on type 'string | number'.
            //Property 'toUpperCase' does not exist on type 'number'.
        }
    - And if you check the type of the variable, then you can apply it's method
    - Within our if check, TypeScript sees typeof id === "number" and understands that as a special form of code called a type guard. TypeScript follows possible paths of execution that our programs can take to analyze the most specific possible type of a value at a given position. It looks at these special checks (called type guards) and assignments, and the process of refining types to more specific types than declared is called narrowing. In many editors we can observe these types as they change, and we’ll even do so in our examples.
    - For Example:
        function printId(id: number | string){
            if(typeof(id) === "string"){
                console.log(id.toUpperCase())
                //this will throw no error, and will work properly
            } else if(typeof(id) === "number"){
                console.log(id)
            }
        }
    - In TypeScript, narrowing refers to the process of refining the type of a value within a specific scope. This is typically done using control flow statements like if, else, switch, and typeof checks, which allow you to assert additional information about a value's type based on runtime conditions.
    - let age: number | "died" | "unknown";
        age = 90;//OK
        age = "died";//OK
        age = "unknown";//OK
        age = "living";//Error
    - You can also define a type alias
        type RawData = boolean | number | string | null | undefined;
        let data: RawData;
        data = "Hello"      //OK
        data = 10           //OK
        data = true         //OK
        data = null         //OK
        data = undefined    //OK
    - You can even combine them
        type id = number | string
        type id2 = id | null | undefined;
    
# Object Types:
    - Type Aliases:
        - Are used to assign the type of any attribute or object
        - type datatype = number | string
            let id: datatype = 1    //OK
            let id: datatype = "1"  //OK
        - type Person = {
            name: string
        }
        let person1: Person = {
            name = "Ali"
        }
        - but we can not add more fields or attributes if once type is defined,
        - For Example:
            type Person = {
                age: number
            }
             // Error: Duplicate identifier 'Person'.
    - Interface:
        - Interface is used to define the structure of an object:
        - For Example:
        interface User{
            name: string
        }
        let user1: User = {
            name: "Ahamd"
        }
        - In interface we can add more fields or attributes if once interface is defined,
        - For exampls:
            interface User{
                age: number
            }
    
    - Anonymous
        let teacher : {name: string, exp: number} = {
            name: "Zeeshan",
            exp: 10
        }
    - Aliased Object Type
        type Student = {
            name: string,
            age?: number
        }

        let student: Student = {
            name: "Hira",
            age: 30
        }
    - Interfaces
        interface Manager {
            name: string,
            subordiates?: number    // question marks means it is optional
        }
        let storeManager: Manager = {
            name: "Bilal"
        }
        - Nested Object Example:
            type Author = {
                firstName: string;
                lastName: string;
            };
            type Book = {
                author: Author;
                name: string;
            };
            const myBook : Book = {
                author: {
                    firstName: "Shahmeer",
                    lastName: "Bukahri"
                },
                name: "My Best Book"
            }