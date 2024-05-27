# Primitive Datatypes
    - In js, Primitive values or data types is data that is not an Object and has no methods and ot properties.
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
    - It can be updated but not redeclared.
    - It is not hoisted to the top of the scope, so it must be declared before it is used.

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

# Hoisting:
    - In JavaScript and TypeScript, hoisting refers to the behavior of moving the declaration of a variable or function to the top of its scope, regardless of where it is actually written in the code.
    - In other words, when a variable or function is declared, it is "hoisted" to the top of its scope, making it accessible from anywhere within that scope, even before it is actually declared.
    - Here's an example:
        console.log(x); // prints undefined
        var x = 10;
    - Even though the console.log statement comes before the declaration of x, the variable x is still accessible because it is "hoisted" to the top of the scope.
    - Note that hoisting only moves the declaration, not the assignment. So in the example above, x is declared at the top, but it is still assigned the value 10 only after the var x = 10 statement.
    - Hoisting can sometimes lead to unexpected behavior, especially when using var declarations. That's one of the reasons why let and const were introduced in modern JavaScript, as they do not have the same hoisting behavior as var.