const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const list = document.querySelector("#ingredients")

const elements = ingredients.map(ingredient => {
  const listItemEl = document.createElement('li')
  listItemEl.classList.add('item')
  listItemEl.textContent = `${ingredient}`
  return listItemEl
});
console.log(elements)
list.append(...elements)
