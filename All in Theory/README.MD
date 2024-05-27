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