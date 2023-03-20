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
  console.log(myPizza);