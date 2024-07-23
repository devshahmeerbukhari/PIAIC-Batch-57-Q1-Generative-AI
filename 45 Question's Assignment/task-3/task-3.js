"use strict";
/*3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase,
uppercase, and titlecase(also known as headline case).*/
const titleCase = (name3) => {
    /*elementsOfName3 will store the total words of name3,
      for example Shahmeer Bukhari has two words, it will
      store Shahmeer at 0th index and bukhari at 1st index..*/
    if (name3) {
        let elementsOfName3 = name3.split(' ');
        if (elementsOfName3.length === 1) {
            /*If we have only one element then capatalize it's first element and rest of all to lower case*/
            let word = elementsOfName3[0];
            return word[0].toUpperCase() + word.substring(1).toLowerCase();
        }
        else {
            let words = "";
            for (let i = 0; i < elementsOfName3.length; i++) {
                let word = elementsOfName3[i];
                words += word[0].toUpperCase() + word.substring(1).toLocaleLowerCase() + " ";
            }
            return words;
        }
    }
    else {
        return console.error("Invalid Input!");
    }
};
let name3 = "shAhMeer bUkhAri";
console.log(`Name3 in lower case: ${name3.toLowerCase()}`);
console.log(`Name3 in upper case: ${name3.toUpperCase()}`);
console.log(`Name3 in titlecase: ${titleCase(name3)}`);
