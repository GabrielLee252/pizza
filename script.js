function pizzaOven(crustType, sauceType, cheeses, toppings) {
    let pizza = {
        crustType: crustType,
        sauceType: sauceType,
        cheeses: cheeses,
        toppings: toppings
    };
    return pizza;
}

const myPizza = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
console.log(myPizza);
//   -----------------------------------1st done---------------------------------
// -------------------------------------second start -----------------------------
function pizzaOven(crustType, sauceType, cheeses, toppings) {
    let pizza = {
        crustType: crustType,
        sauceType: sauceType,
        cheeses: cheeses,
        toppings: toppings
    };
    return pizza;
}

const myPizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(myPizza2);
// -----------------------------------------2nd done--------------------------------------------
// -----------------------------------------3rd start ------------------------------------------
function pizzaOven(crustType, sauceType, cheeses, toppings) {
    let pizza = {
        crustType: crustType,
        sauceType: sauceType,
        cheeses: cheeses,
        toppings: toppings
    };
    return pizza;
}

const myPizza3 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["bacon", "ham", "pineapple"]);
console.log(myPizza3);
//   ---------------------------------------3rd done---------------------------------------------
// ------------------------------------------bonus-------------------------------------------

function pizzaOven(crustType, sauceType, cheeses, toppings) {
    let pizza = {
        crustType: crustType,
        sauceType: sauceType,
        cheeses: cheeses,
        toppings: toppings
    };
    return pizza;
}

function randomPizza() {
    const crustTypes = ["thin", "thick", "deep dish"];
    const sauceTypes = ["marinara", "alfredo", "bbq"];
    const cheeses = ["mozzarella", "cheddar", "parmesan", "feta"];
    const toppings = ["pepperoni", "sausage", "mushrooms", "onions", "bell peppers", "olives"];

    const randomCrust = crustTypes[Math.floor(Math.random() * crustTypes.length)];
    const randomSauce = sauceTypes[Math.floor(Math.random() * sauceTypes.length)];
    const randomCheeses = [cheeses[Math.floor(Math.random() * cheeses.length)]];
    const randomToppings = [
        toppings[Math.floor(Math.random() * toppings.length)],
        toppings[Math.floor(Math.random() * toppings.length)],
        toppings[Math.floor(Math.random() * toppings.length)]
    ];

    const pizza = pizzaOven(randomCrust, randomSauce, randomCheeses, randomToppings);
    return pizza;
}

console.log(randomPizza());
