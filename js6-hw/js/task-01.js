const total = document.querySelectorAll('.item');
console.log(`Number of categories: ${total.length}`)

total.forEach(category => {
    const title = category.querySelector("h2");
    console.log(`Category: ${title.textContent}`);
    const elements = category.querySelectorAll("li");
    console.log(`Elements: ${elements.length}`);
})

