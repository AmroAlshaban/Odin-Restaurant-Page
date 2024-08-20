import friedChicken from "../images/menu/bar/fast_food/fried_chicken.png";
import grilledChicken from "../images/menu/bar/fast_food/grilled_chicken.png";
import chickenPizza from "../images/menu/bar/fast_food/chicken_pizza.png";
import salmon from "../images/menu/bar/seafood/salmon.png";
import grilledFish from "../images/menu/bar/seafood/grilled_fish.png";
import salad from "../images/menu/bar/vegetarian_and_vegan_barbecue/salad.png";

export const specialOffers = {
    categoryName: 'Special Offers',
    foodProperties: ['Fried Chicken', 'Grilled Chicken', 'Fried/Grilled Chicken'],
    allNumberOfItems: [6, 7, 2],
    allImageSources: [
        [friedChicken, friedChicken, friedChicken, friedChicken, friedChicken, friedChicken],
        [grilledChicken, grilledChicken, grilledChicken, grilledChicken, grilledChicken, grilledChicken, grilledChicken],
        [chickenPizza, chickenPizza]
    ],
    allDescriptionTitles: [
        ['Combo 24', 'Combo 24', 'Combo 24', 'Combo 24', 'Combo 24', 'Combo 24'],
        ['Combo 24', 'Combo 24', 'Combo 24', 'Combo 24', 'Combo 24', 'Combo 24', 'Combo 24'],
        ['Combo 24', 'Combo 24']
    ],
    allDescriptionSubtitles: [
        ['Fried Dinner Snack', 'Fried Dinner Snack', 'Fried Dinner Snack', 'Fried Dinner Snack', 'Fried Dinner Snack', 'Fried Dinner Snack'],
        ['Fried Dinner Snack', 'Fried Dinner Snack', 'Fried Dinner Snack', 'Fried Dinner Snack', 'Fried Dinner Snack', 'Fried Dinner Snack', 'Fried Dinner Snack'],
        ['Fried Dinner Snack', 'Fried Dinner Snack']
    ],
    allPrices: [
        ['$8.99', '$8.99', '$8.99', '$8.99', '$8.99', '$8.99'],
        ['$8.99', '$8.99', '$8.99', '$8.99', '$8.99', '$8.99', '$8.99'],
        ['$8.99', '$8.99']
    ],
    allDescriptionBriefs: [
        ['Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'],
        ['Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'],
        ['Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.']
    ]
};

export const fastFood = {
    categoryName: 'Fast Food',
    foodProperties: ['Property 1', 'Property 2', 'Property 3', 'Property 4', 'Property 5'],
    allNumberOfItems: [3, 1, 5, 5, 4],
    allImageSources: [
        [friedChicken, friedChicken, friedChicken],
        [chickenPizza],
        [grilledChicken, chickenPizza, friedChicken, grilledChicken, grilledChicken],
        [friedChicken, grilledChicken, grilledChicken, friedChicken, friedChicken],
        [friedChicken, friedChicken, grilledChicken, chickenPizza]
    ],
    allDescriptionTitles: [
        ['Combo 24', 'Combo 24', 'Combo 24'],
        ['Combo 24'],
        ['Combo 24', 'Combo 24', 'Combo 24', 'Combo 24', 'Combo 24'],
        ['Combo 24', 'Combo 24', 'Combo 24', 'Combo 24', 'Combo 24'],
        ['Combo 24', 'Combo 24', 'Combo 24', 'Combo 24']
    ],
    allDescriptionSubtitles: [
        ['Fried Dinner Snack', 'Fried Dinner Snack', 'Fried Dinner Snack'],
        ['Fried Dinner Snack'],
        ['Fried Dinner Snack', 'Fried Dinner Snack', 'Fried Dinner Snack', 'Fried Dinner Snack', 'Fried Dinner Snack'],
        ['Fried Dinner Snack', 'Fried Dinner Snack', 'Fried Dinner Snack', 'Fried Dinner Snack', 'Fried Dinner Snack'],
        ['Fried Dinner Snack', 'Fried Dinner Snack', 'Fried Dinner Snack', 'Fried Dinner Snack']
    ],
    allPrices: [
        ['$8.99', '$8.99', '$8.99'],
        ['$8.99'],
        ['$8.99', '$8.99', '$8.99', '$8.99', '$8.99'],
        ['$8.99', '$8.99', '$8.99', '$8.99', '$8.99'],
        ['$8.99', '$8.99', '$8.99', '$8.99']
    ],
    allDescriptionBriefs: [
        ['Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'],
        ['Lorem ipsum dolor sit amet consectetur adipisicing elit.'],
        ['Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'],
        ['Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'],
        ['Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.']
    ]
};

export const casualAndFineDining = {
    categoryName: 'Casual and Fine Dining',
    foodProperties: ['Property 1', 'Property 2', 'Property 3', 'Property 4', 'Property 5'],
    allNumberOfItems: [3, 1, 5, 5, 4],
    allImageSources: [
        [grilledChicken, friedChicken, grilledChicken],
        [friedChicken],
        [friedChicken, friedChicken, grilledChicken, grilledChicken, grilledChicken],
        [grilledChicken, friedChicken, friedChicken, grilledChicken, friedChicken],
        [friedChicken, grilledChicken, friedChicken, grilledChicken]
    ],
    allDescriptionTitles: [
        ['Combo 24', 'Combo 24', 'Combo 24'],
        ['Combo 24'],
        ['Combo 24', 'Combo 24', 'Combo 24', 'Combo 24', 'Combo 24'],
        ['Combo 24', 'Combo 24', 'Combo 24', 'Combo 24', 'Combo 24'],
        ['Combo 24', 'Combo 24', 'Combo 24', 'Combo 24']
    ],
    allDescriptionSubtitles: [
        ['Fried Dinner Snack', 'Fried Dinner Snack', 'Fried Dinner Snack'],
        ['Fried Dinner Snack'],
        ['Fried Dinner Snack', 'Fried Dinner Snack', 'Fried Dinner Snack', 'Fried Dinner Snack', 'Fried Dinner Snack'],
        ['Fried Dinner Snack', 'Fried Dinner Snack', 'Fried Dinner Snack', 'Fried Dinner Snack', 'Fried Dinner Snack'],
        ['Fried Dinner Snack', 'Fried Dinner Snack', 'Fried Dinner Snack', 'Fried Dinner Snack']
    ],
    allPrices: [
        ['$8.99', '$8.99', '$8.99'],
        ['$8.99'],
        ['$8.99', '$8.99', '$8.99', '$8.99', '$8.99'],
        ['$8.99', '$8.99', '$8.99', '$8.99', '$8.99'],
        ['$8.99', '$8.99', '$8.99', '$8.99']
    ],
    allDescriptionBriefs: [
        ['Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'],
        ['Lorem ipsum dolor sit amet consectetur adipisicing elit.'],
        ['Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'],
        ['Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'],
        ['Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.']
    ]
};

export const seaFood = {
    categoryName: 'Seafood',
    foodProperties: ['Property 1', 'Property 2', 'Property 3', 'Property 4', 'Property 5'],
    allNumberOfItems: [3, 1, 5, 5, 4],
    allImageSources: [
        [salmon, salmon, grilledFish],
        [grilledFish],
        [salmon, grilledFish, grilledFish, grilledFish, grilledChicken],
        [grilledChicken, friedChicken, friedChicken, grilledFish, salmon],
        [friedChicken, grilledChicken, grilledFish, salmon]
    ],
    allDescriptionTitles: [
        ['Combo 24', 'Combo 24', 'Combo 24'],
        ['Combo 24'],
        ['Combo 24', 'Combo 24', 'Combo 24', 'Combo 24', 'Combo 24'],
        ['Combo 24', 'Combo 24', 'Combo 24', 'Combo 24', 'Combo 24'],
        ['Combo 24', 'Combo 24', 'Combo 24', 'Combo 24']
    ],
    allDescriptionSubtitles: [
        ['Fried Dinner Snack', 'Fried Dinner Snack', 'Fried Dinner Snack'],
        ['Fried Dinner Snack'],
        ['Fried Dinner Snack', 'Fried Dinner Snack', 'Fried Dinner Snack', 'Fried Dinner Snack', 'Fried Dinner Snack'],
        ['Fried Dinner Snack', 'Fried Dinner Snack', 'Fried Dinner Snack', 'Fried Dinner Snack', 'Fried Dinner Snack'],
        ['Fried Dinner Snack', 'Fried Dinner Snack', 'Fried Dinner Snack', 'Fried Dinner Snack']
    ],
    allPrices: [
        ['$8.99', '$8.99', '$8.99'],
        ['$8.99'],
        ['$8.99', '$8.99', '$8.99', '$8.99', '$8.99'],
        ['$8.99', '$8.99', '$8.99', '$8.99', '$8.99'],
        ['$8.99', '$8.99', '$8.99', '$8.99']
    ],
    allDescriptionBriefs: [
        ['Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'],
        ['Lorem ipsum dolor sit amet consectetur adipisicing elit.'],
        ['Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'],
        ['Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'],
        ['Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.']
    ]
};

export const veganAndVegetarian = {
    categoryName: 'Vegan and Vegetarian',
    foodProperties: ['Property 1', 'Property 2', 'Property 3', 'Property 4', 'Property 5'],
    allNumberOfItems: [3, 1, 5, 5, 4],
    allImageSources: [
        [salad, salad, salad],
        [salad],
        [salad, salad, salad, salad, salad],
        [salad, salad, salad, salad, salad],
        [salad, salad, salad, salad]
    ],
    allDescriptionTitles: [
        ['Combo 24', 'Combo 24', 'Combo 24'],
        ['Combo 24'],
        ['Combo 24', 'Combo 24', 'Combo 24', 'Combo 24', 'Combo 24'],
        ['Combo 24', 'Combo 24', 'Combo 24', 'Combo 24', 'Combo 24'],
        ['Combo 24', 'Combo 24', 'Combo 24', 'Combo 24']
    ],
    allDescriptionSubtitles: [
        ['Fried Dinner Snack', 'Fried Dinner Snack', 'Fried Dinner Snack'],
        ['Fried Dinner Snack'],
        ['Fried Dinner Snack', 'Fried Dinner Snack', 'Fried Dinner Snack', 'Fried Dinner Snack', 'Fried Dinner Snack'],
        ['Fried Dinner Snack', 'Fried Dinner Snack', 'Fried Dinner Snack', 'Fried Dinner Snack', 'Fried Dinner Snack'],
        ['Fried Dinner Snack', 'Fried Dinner Snack', 'Fried Dinner Snack', 'Fried Dinner Snack']
    ],
    allPrices: [
        ['$8.99', '$8.99', '$8.99'],
        ['$8.99'],
        ['$8.99', '$8.99', '$8.99', '$8.99', '$8.99'],
        ['$8.99', '$8.99', '$8.99', '$8.99', '$8.99'],
        ['$8.99', '$8.99', '$8.99', '$8.99']
    ],
    allDescriptionBriefs: [
        ['Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'],
        ['Lorem ipsum dolor sit amet consectetur adipisicing elit.'],
        ['Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'],
        ['Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'],
        ['Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.']
    ]
};

export const barbecue = {
    categoryName: 'Barbecue',
    foodProperties: ['Property 1', 'Property 2', 'Property 3', 'Property 4', 'Property 5'],
    allNumberOfItems: [3, 1, 5, 5, 4],
    allImageSources: [
        [grilledFish, friedChicken, salmon],
        [friedChicken],
        [friedChicken, salmon, grilledChicken, grilledFish, grilledChicken],
        [grilledChicken, friedChicken, friedChicken, grilledFish, friedChicken],
        [salmon, grilledChicken, friedChicken, grilledChicken]
    ],
    allDescriptionTitles: [
        ['Combo 24', 'Combo 24', 'Combo 24'],
        ['Combo 24'],
        ['Combo 24', 'Combo 24', 'Combo 24', 'Combo 24', 'Combo 24'],
        ['Combo 24', 'Combo 24', 'Combo 24', 'Combo 24', 'Combo 24'],
        ['Combo 24', 'Combo 24', 'Combo 24', 'Combo 24']
    ],
    allDescriptionSubtitles: [
        ['Fried Dinner Snack', 'Fried Dinner Snack', 'Fried Dinner Snack'],
        ['Fried Dinner Snack'],
        ['Fried Dinner Snack', 'Fried Dinner Snack', 'Fried Dinner Snack', 'Fried Dinner Snack', 'Fried Dinner Snack'],
        ['Fried Dinner Snack', 'Fried Dinner Snack', 'Fried Dinner Snack', 'Fried Dinner Snack', 'Fried Dinner Snack'],
        ['Fried Dinner Snack', 'Fried Dinner Snack', 'Fried Dinner Snack', 'Fried Dinner Snack']
    ],
    allPrices: [
        ['$8.99', '$8.99', '$8.99'],
        ['$8.99'],
        ['$8.99', '$8.99', '$8.99', '$8.99', '$8.99'],
        ['$8.99', '$8.99', '$8.99', '$8.99', '$8.99'],
        ['$8.99', '$8.99', '$8.99', '$8.99']
    ],
    allDescriptionBriefs: [
        ['Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'],
        ['Lorem ipsum dolor sit amet consectetur adipisicing elit.'],
        ['Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'],
        ['Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'],
        ['Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.']
    ]
};

export const cafe = {
    categoryName: 'Cafe',
    foodProperties: ['Property 1', 'Property 2', 'Property 3', 'Property 4', 'Property 5'],
    allNumberOfItems: [3, 1, 5, 5, 4],
    allImageSources: [
        [grilledFish, friedChicken, salmon],
        [salad],
        [friedChicken, salmon, salad, grilledFish, grilledChicken],
        [grilledChicken, salad, grilledFish, friedChicken, salmon],
        [salmon, salad, friedChicken, grilledChicken]
    ],
    allDescriptionTitles: [
        ['Combo 24', 'Combo 24', 'Combo 24'],
        ['Combo 24'],
        ['Combo 24', 'Combo 24', 'Combo 24', 'Combo 24', 'Combo 24'],
        ['Combo 24', 'Combo 24', 'Combo 24', 'Combo 24', 'Combo 24'],
        ['Combo 24', 'Combo 24', 'Combo 24', 'Combo 24']
    ],
    allDescriptionSubtitles: [
        ['Fried Dinner Snack', 'Fried Dinner Snack', 'Fried Dinner Snack'],
        ['Fried Dinner Snack'],
        ['Fried Dinner Snack', 'Fried Dinner Snack', 'Fried Dinner Snack', 'Fried Dinner Snack', 'Fried Dinner Snack'],
        ['Fried Dinner Snack', 'Fried Dinner Snack', 'Fried Dinner Snack', 'Fried Dinner Snack', 'Fried Dinner Snack'],
        ['Fried Dinner Snack', 'Fried Dinner Snack', 'Fried Dinner Snack', 'Fried Dinner Snack']
    ],
    allPrices: [
        ['$8.99', '$8.99', '$8.99'],
        ['$8.99'],
        ['$8.99', '$8.99', '$8.99', '$8.99', '$8.99'],
        ['$8.99', '$8.99', '$8.99', '$8.99', '$8.99'],
        ['$8.99', '$8.99', '$8.99', '$8.99']
    ],
    allDescriptionBriefs: [
        ['Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'],
        ['Lorem ipsum dolor sit amet consectetur adipisicing elit.'],
        ['Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'],
        ['Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'],
        ['Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.']
    ]
};

export const pastry = {
    categoryName: 'Pastry',
    foodProperties: ['Property 1', 'Property 2', 'Property 3', 'Property 4', 'Property 5'],
    allNumberOfItems: [3, 1, 5, 5, 4],
    allImageSources: [
        [grilledFish, friedChicken, salmon],
        [friedChicken],
        [friedChicken, salmon, grilledChicken, grilledFish, grilledChicken],
        [grilledChicken, friedChicken, friedChicken, grilledFish, friedChicken],
        [salmon, grilledChicken, friedChicken, grilledChicken]
    ],
    allDescriptionTitles: [
        ['Combo 24', 'Combo 24', 'Combo 24'],
        ['Combo 24'],
        ['Combo 24', 'Combo 24', 'Combo 24', 'Combo 24', 'Combo 24'],
        ['Combo 24', 'Combo 24', 'Combo 24', 'Combo 24', 'Combo 24'],
        ['Combo 24', 'Combo 24', 'Combo 24', 'Combo 24']
    ],
    allDescriptionSubtitles: [
        ['Fried Dinner Snack', 'Fried Dinner Snack', 'Fried Dinner Snack'],
        ['Fried Dinner Snack'],
        ['Fried Dinner Snack', 'Fried Dinner Snack', 'Fried Dinner Snack', 'Fried Dinner Snack', 'Fried Dinner Snack'],
        ['Fried Dinner Snack', 'Fried Dinner Snack', 'Fried Dinner Snack', 'Fried Dinner Snack', 'Fried Dinner Snack'],
        ['Fried Dinner Snack', 'Fried Dinner Snack', 'Fried Dinner Snack', 'Fried Dinner Snack']
    ],
    allPrices: [
        ['$8.99', '$8.99', '$8.99'],
        ['$8.99'],
        ['$8.99', '$8.99', '$8.99', '$8.99', '$8.99'],
        ['$8.99', '$8.99', '$8.99', '$8.99', '$8.99'],
        ['$8.99', '$8.99', '$8.99', '$8.99']
    ],
    allDescriptionBriefs: [
        ['Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'],
        ['Lorem ipsum dolor sit amet consectetur adipisicing elit.'],
        ['Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'],
        ['Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'],
        ['Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.']
    ]
};

export const ethnicCuisine = {
    categoryName: 'Ethnic Cuisine',
    foodProperties: ['Property 1', 'Property 2', 'Property 3', 'Property 4', 'Property 5'],
    allNumberOfItems: [3, 1, 5, 5, 4],
    allImageSources: [
        [grilledFish, friedChicken, salmon],
        [salad],
        [friedChicken, salmon, salad, grilledFish, grilledChicken],
        [grilledChicken, friedChicken, friedChicken, grilledFish, friedChicken],
        [salmon, salad, friedChicken, grilledChicken]
    ],
    allDescriptionTitles: [
        ['Combo 24', 'Combo 24', 'Combo 24'],
        ['Combo 24'],
        ['Combo 24', 'Combo 24', 'Combo 24', 'Combo 24', 'Combo 24'],
        ['Combo 24', 'Combo 24', 'Combo 24', 'Combo 24', 'Combo 24'],
        ['Combo 24', 'Combo 24', 'Combo 24', 'Combo 24']
    ],
    allDescriptionSubtitles: [
        ['Fried Dinner Snack', 'Fried Dinner Snack', 'Fried Dinner Snack'],
        ['Fried Dinner Snack'],
        ['Fried Dinner Snack', 'Fried Dinner Snack', 'Fried Dinner Snack', 'Fried Dinner Snack', 'Fried Dinner Snack'],
        ['Fried Dinner Snack', 'Fried Dinner Snack', 'Fried Dinner Snack', 'Fried Dinner Snack', 'Fried Dinner Snack'],
        ['Fried Dinner Snack', 'Fried Dinner Snack', 'Fried Dinner Snack', 'Fried Dinner Snack']
    ],
    allPrices: [
        ['$8.99', '$8.99', '$8.99'],
        ['$8.99'],
        ['$8.99', '$8.99', '$8.99', '$8.99', '$8.99'],
        ['$8.99', '$8.99', '$8.99', '$8.99', '$8.99'],
        ['$8.99', '$8.99', '$8.99', '$8.99']
    ],
    allDescriptionBriefs: [
        ['Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'],
        ['Lorem ipsum dolor sit amet consectetur adipisicing elit.'],
        ['Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'],
        ['Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'],
        ['Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit.']
    ]
};