"use strict";
/*Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name.
Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around
the name is displayed. Then print the name after striping the white spaces.*/
Object.defineProperty(exports, "__esModule", { value: true });
let personName = "\t\n    Shahmeer       Bukhari             \t\t.";
console.log(`Before stripping whitespaces: ${personName}`);
let afterStipping = personName.replace(/\s+/g, ' ');
/*This code uses the regular expression \s+ to match one or more whitespace characters,
and the g flag to replace all occurrences in the string, not just the first one.
The replacement string is a single space, so all whitespace characters are
replaced with a single space.*/
console.log(`After stripping whitespaces: ${afterStipping}`);
