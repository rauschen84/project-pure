// Toggle mobile menu
const navBtn = document.querySelector('.nav-btn');
const navLinks = document.querySelector('.nav-links');

navBtn.addEventListener('click', () => {
  navLinks.classList.toggle('show-links');
});


// Hardcoded quantites of ingredients that update the ingredient
// list accordingly to selected servings
const ingredientsData = {
  2: [
    "2 1/2 cups shredded carrots",
    "1/2 cup chopped walnuts",
    "3 tbsp maple syrup"
  ],
  4: [
    "5 cups shredded carrots",
    "1 cup chopped walnuts",
    "6 tbsp maple syrup"
  ],
  6: [
    "7 1/2 cups shredded carrots",
    "1 1/2 cups chopped walnuts",
    "9 tbsp maple syrup"
  ]
};

const servingsSelect = document.getElementById("servings");
const ingredientsList = document.getElementById("ingredients-list");

servingsSelect.addEventListener("change", (e) => {
  const selected = e.target.value;
  const newIngredients = ingredientsData[selected];

  // Clear and update ingredients
  ingredientsList.innerHTML = "";
  newIngredients.forEach(item => {
    const li = document.createElement("li");
    li.className = "single-ingredient";
    li.textContent = item;
    ingredientsList.appendChild(li);
  });
});

// Dynamic footer year
const date = document.getElementById('date');
date.textContent = new Date().getFullYear();