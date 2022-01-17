const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsRef = document.querySelector('#ingredients');
const listIngredients = ingredients.map((ingredient) =>{
  const itemsRef = document.createElement('li');
  itemsRef.textContent = ingredient;
itemsRef.classList.add('item');
  return itemsRef;
});

ingredientsRef.append(...listIngredients);
