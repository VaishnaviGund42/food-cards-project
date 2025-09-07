// Array of favourite food items
let foods = [
  { name: "Pizza", image: "images/pizza-img.jpg" },
  { name: "Burger", image: "images/burger.jpg" },
  { name: "Pasta", image: "images/pasta.jpg" },
  { name: "Ice Cream", image: "images/icecream.jpg" },
  { name: "Sandwich", image: "images/sandwich-img.jpg" }
];
// Get container
let container = document.getElementById("food-container");

// Iterate and create cards dynamically
foods.forEach(food => {
  let card = document.createElement("div");
  card.className = "food-card";

  card.innerHTML = `
    <img src="${food.image}" alt="${food.name}">
    <h3>${food.name}</h3>
  `;

  container.appendChild(card);
});