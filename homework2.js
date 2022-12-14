//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function iterateObj(obj) {
    let fav_foods = '';
    for (const kv in obj) {
        if (Array.isArray(obj[kv])) {
            if (typeof(obj[kv][0]) === 'object') {
                let keys = Object.keys(obj[kv][0]);
                let values = Object.values(obj[kv][0]);
                keys.forEach(k => {
                    fav_foods += `${k}: ${values[keys.indexOf(k)]}\n`;
                });
            } else {
                fav_foods += `Favorite ${kv}: ${obj[kv].join(", ")}\n`;
            }
        } else {
            fav_foods += `Favorite ${kv}: ${obj[kv]}\n`;
        }
    }  
    return fav_foods
};

console.log(iterateObj(person3)) 
/*
Returns: 
pizza: Deep Dish, South Side Thin Crust
Favorite tacos: Anything not from Taco bell
Favorite burgers: Portillos Burgers
ice_cream: Chocolate, Vanilla, Oreo
oberwise: Chocolate
dunkin: Vanilla
culvers: All of them
mcDonalds: Sham-rock-shake
cupids_candies: Chocolate Malt
*/


//=======Exercise #2=========//
/*
Write an Javascript Class for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Class

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    printInfo = () => `Name: ${this.name}\nAge: ${this.age}\n`;

    yearUp = (years) => { if (typeof(years) !== 'number') throw `The yearUp method must be passed a NUMBER`; this.age = this.age + years }

};
const person_1 = new Person('John', 10);
const person_2 = new Person('Jimmy', 19);

console.log(person_1.printInfo()); // Name: John Age: 10
console.log(person_2.printInfo()); // Name: Jimmy Age: 19

person_1.yearUp(3);
console.log(person_1.age) // Returns int: 13


// =============Exercise #3 ============//
/*
    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

let greater_than_10 = function(word) {
    return new Promise(function(res, rej) {
        if (!word) rej(Error('No word provided'))
        if (word.length > 10) {
            res('Big Word')
        } else {
            res('Small Number')
        }
    });
};

greater_than_10('this will return Big Word').then(function(res) {
    console.log(res);
});

// https://www.codewars.com/kata/583203e6eb35d7980400002a
// https://www.codewars.com/kata/52efefcbcdf57161d4000091
