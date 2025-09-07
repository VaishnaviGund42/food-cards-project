// Array of favourite food items
let foods = [
  { name: "Pizza", image: "images/pizza-img.jpg" },
  { name: "Burger", image: "https://source.unsplash.com/200x150/?burger" },
  { name: "Pasta", image: "https://source.unsplash.com/200x150/?pasta" },
  { name: "Ice Cream", image: "https://source.unsplash.com/200x150/?icecream" },
  { name: "Sushi", image: "https://source.unsplash.com/200x150/?sushi" }
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