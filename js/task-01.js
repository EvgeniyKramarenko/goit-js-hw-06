const categoriesRef = document.querySelectorAll(".item");

const numberOfCategories = categoriesRef.length;
console.log(`Number of categories: ${numberOfCategories}`);

for (let i = 0; i < numberOfCategories; i += 1){
    const title = categoriesRef[i].firstElementChild.textContent;
    console.log(`Category: ${title}`);

    const elements = categoriesRef[i].lastElementChild;
    const numberOfElements = elements.querySelectorAll('li')
    console.log(`Elements: ${numberOfElements.length}`);
}

