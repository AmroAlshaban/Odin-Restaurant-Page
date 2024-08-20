import { createNewElement } from '../helperFunctions.js';


function createBrowseMenu() {
    const browseMenu = createNewElement({nameTag: 'div', className: 'browse-menu'});
    const search = createNewElement({nameTag: 'div', className: 'search'});
    const bar = createNewElement({nameTag: 'div', className: 'bar'});

    const submit = createNewElement({nameTag: 'button', className: 'submit'});
    const searchFood = createNewElement({nameTag: 'input', idName: 'search-food', attributes: {type: 'text'}});

    const buttonChoices = ['Special Offers', 'All', 'Fast Food', 'Casual and Fine Dining', 'Seafood',
                           'Vegetarian and Vegan', 'Barbecue', 'Cafe', 'Pastry', 'Ethnic Cuisine'];
    const barButtons = Array.from({ length: buttonChoices.length }, (_, index) => {
        return createNewElement({
            nameTag: 'button',
            className: buttonChoices[index].toLowerCase().split(' ').join('-'),
            textContent: buttonChoices[index]
        });
    });

    search.append(submit, searchFood);
    barButtons.forEach((button) => {
        bar.append(button);
    });
    browseMenu.append(search, bar);

    return browseMenu;
};

function createCategory(categoryName) {
    const category = createNewElement({nameTag: 'div', className: 'category', textContent: categoryName});

    return category;
};

function createFoods({ foodProperty, numberOfItems, imageSources, descriptionTitles, descriptionSubtitles, prices, descriptionBriefs }) {
    const foods = createNewElement({nameTag: 'div', className: 'foods'});
    const property = createNewElement({nameTag: 'div', className: 'property', textContent: foodProperty});
    const foodList = createNewElement({nameTag: 'div', className: 'food-list'});

    const items = Array.from({ length: numberOfItems }, () => {
        return createNewElement({nameTag: 'div', className: 'item'});
    });
    const images = Array.from({ length: numberOfItems }, () => {
        return createNewElement({nameTag: 'div', className: 'image'});
    });
    const descriptions = Array.from({ length: numberOfItems }, () => {
        return createNewElement({nameTag: 'div', className: 'description'});
    });
    
    const titles = Array.from({ length: numberOfItems }, (_, index) => {
        const title = createNewElement({nameTag: 'div', className: 'title'});
        const titleContainer = createNewElement({nameTag: 'div', className: 'title-container'});
        const priceContainer = createNewElement({nameTag: 'div', className: 'price-container'});
        const pTitle = createNewElement({nameTag: 'p', textContent: `${descriptionTitles[index]}:`});
        const pSubtitle = createNewElement({nameTag: 'p', textContent: `${descriptionSubtitles[index]}`});
        const pPrice = createNewElement({nameTag: 'p', textContent: prices[index]});

        titleContainer.append(pTitle, pSubtitle);
        priceContainer.append(pPrice);
        title.append(titleContainer, priceContainer);
        return title;
    });
    const separator = Array.from({ length: numberOfItems }, () => {
        return createNewElement({nameTag: 'div', className: 'separator'});
    });
    const briefs = Array.from({ length: numberOfItems }, (_, index) => {
        const brief = createNewElement({nameTag: 'div', className: 'brief'});
        const p = createNewElement({nameTag: 'p', textContent: `${descriptionBriefs[index]}`});
        const button = createNewElement({nameTag: 'button', textContent: 'Add to Cart'});

        brief.append(p, button);
        return brief;
    });

    images.forEach((image, index) => {
        const img = createNewElement({nameTag: 'img', attributes: {src: imageSources[index], alt: descriptionTitles[index]}});
        image.append(img);
    });

    descriptions.forEach((description, index) => {
        const br1 = createNewElement({nameTag: 'br'});
        const br2 = createNewElement({nameTag: 'br'});
        description.append(br1, br2, titles[index], separator[index], briefs[index]);
    });

    items.forEach((item, index) => {
        item.append(images[index], descriptions[index]);
        foodList.append(item);
    });

    foods.append(property, foodList);
    return foods;
};


export default { createBrowseMenu, createCategory, createFoods }