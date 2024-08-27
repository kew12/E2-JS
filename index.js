const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

// Las pizzas que tengan un id impar.
console.log("Pizzas con id impar:");
const pizzasConIdImpar = pizzas.filter(pizza => pizza.id % 2 !== 0);
pizzasConIdImpar.forEach(pizza => console.log(`La ${pizza.nombre} tiene un id impar: ${pizza.id}`));

// ¿Hay alguna pizza que valga menos de $600?
console.log("¿Hay alguna pizza que valga menos de $600?");
const pizzaBarata = pizzas.find(pizza => pizza.precio < 600);
if (pizzaBarata) {
    console.log(`Sí, la ${pizzaBarata.nombre} vale menos de $600.`);
} else {
    console.log("No, no hay ninguna pizza que valga menos de $600.");
}

//  El nombre de cada pizza con su respectivo precio.
console.log("Nombre de cada pizza con su respectivo precio:");
const nombresYPrecios = pizzas.map(pizza => `La ${pizza.nombre} tiene un valor de $${pizza.precio}.`);
nombresYPrecios.forEach(mensaje => console.log(mensaje));

// Todos los ingredientes de cada pizza.
console.log("Ingredientes de cada pizza:");
pizzas.forEach(pizza => {
    const ingredientes = pizza.ingredientes.reduce((acc, ingrediente) => acc + `- ${ingrediente}\n`, "");
    console.log(`La ${pizza.nombre} tiene los siguientes ingredientes:\n${ingredientes}`);
});
