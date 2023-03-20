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
  