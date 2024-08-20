import "./styles/styles.css";
import "./styles/home.css";
import "./styles/menu.css";
import home from "./home/home.js";
import menu from "./menu/menu.js";

import { specialOffers, fastFood, casualAndFineDining, seaFood, veganAndVegetarian, barbecue, cafe, pastry, ethnicCuisine } from "./menu/barButtons.js";

const restaurantName = document.querySelector('#restaurant-name');
const content = document.querySelector('#content');
const homeButton = document.querySelector('header > nav > button:first-child');
const menuButton = document.querySelector('header > nav > button:nth-child(2)');


function clearContent() {
    content.replaceChildren();
};

function barButtonsEventListener() {
    const barButtons = document.querySelectorAll('.bar button');
    barButtons.forEach(button => {
        button.addEventListener('click', () => {
            switch (button.textContent) {
                case 'Special Offers':
                    openMenu(specialOffers);
                    break;
                case 'Fast Food':
                    openMenu(fastFood);
                    break;
                case 'Casual and Fine Dining':
                    openMenu(casualAndFineDining);
                    break;
                case 'Seafood':
                    openMenu(seaFood);
                    break;
                case 'Vegetarian and Vegan':
                    openMenu(veganAndVegetarian);
                    break;
                case 'Barbecue':
                    openMenu(barbecue);
                    break;
                case 'Cafe':
                    openMenu(cafe);
                    break;
                case 'Pastry':
                    openMenu(pastry);
                    break;
                case 'Ethnic Cuisine':
                    openMenu(ethnicCuisine);
                    break;
                case 'All':
                    openMenu(specialOffers, true);
                    openMenu(fastFood, false);
                    openMenu(casualAndFineDining, false);
                    openMenu(seaFood, false);
                    openMenu(veganAndVegetarian, false);
                    openMenu(barbecue, false);
                    openMenu(cafe, false);
                    openMenu(pastry, false);
                    openMenu(ethnicCuisine, false);
                    break;
            };
        });
    });
};

function openHome() {
    clearContent();
    content.append(...[
        home.createImageContainer(),
        home.createDiscover(),
        home.createStatistics(),
        home.createApp()
    ]);
};

function openMenu(module, clear=true) {
    if (clear) {
        clearContent();
        content.append(menu.createBrowseMenu());
    };
    content.append(...[
        menu.createCategory(module.categoryName),
        ...Array.from({ length: module.foodProperties.length }, (_, index) => {
            return menu.createFoods({
                foodProperty: module.foodProperties[index], 
                numberOfItems: module.allNumberOfItems[index],
                imageSources: module.allImageSources[index],
                descriptionTitles: module.allDescriptionTitles[index],
                descriptionSubtitles: module.allDescriptionSubtitles[index],
                prices: module.allPrices[index],
                descriptionBriefs: module.allDescriptionBriefs[index],
            });
        })
    ]);

    barButtonsEventListener();
};


document.addEventListener('DOMContentLoaded', openHome);

restaurantName.addEventListener('click', openHome);
homeButton.addEventListener('click', openHome);
menuButton.addEventListener('click', () => {
    openMenu(specialOffers);
});
