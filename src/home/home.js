import { createNewElement } from '../helperFunctions.js';

function createImageContainer() {
    const imageContainer = createNewElement({nameTag: 'div', className: 'image-container'});
    const titleCard = createNewElement({nameTag: 'div', className: 'title-card', textContent: 'We have what you crave'});
    const order = createNewElement({nameTag: 'button', className: 'order', textContent: 'Order Now!'});

    imageContainer.append(titleCard, order);
    return imageContainer;
};

function createDiscover() {
    const discover = createNewElement({nameTag: 'div', className: 'discover'});
    const p = createNewElement({nameTag: 'p', textContent: 'DISCOVER'});
    const discoveries = createNewElement({nameTag: 'div', className: 'discoveries'});
    const buttons = ['locations', 'videos', 'news', 'podcasts', 'careers', 'programs'].map((name) => {
        const button = createNewElement({nameTag: 'button', className: name, textContent: name.toUpperCase()});
        return button;
    });

    discoveries.append(...buttons);
    discover.append(p, discoveries);

    return discover; 
};

function createStatistics() {
    const statistics = createNewElement({nameTag: 'div', className: 'statistics'});
    const p = createNewElement({nameTag: 'p', textContent: 'INSIGHTS'});
    const insights = createNewElement({nameTag: 'div', className: 'insights'});

    const image = createNewElement({nameTag: 'div', className: 'image'});
    const data = createNewElement({nameTag: 'div', className: 'data'});

    const metricTypes = ['places', 'employees', 'chicken', 'beans', 'seafood', 'sandwiches', 'latte', 'growth'];
    const metrics = Array.from({ length: metricTypes.length }, () => {
        return createNewElement({nameTag: 'div', className: 'metric'});
    });

    const imageHolders = Array.from({ length: metricTypes.length }, (_, index) => {
        return createNewElement({nameTag: 'div', className: metricTypes[index]});
    });
    const infos = Array.from({ length: metricTypes.length }, () => {
        return createNewElement({nameTag: 'div', className: 'info'});
    });

    const infoContents = Array.from({ length: metricTypes.length }, () => {
        const metricTitle = createNewElement({nameTag: 'p'});
        const metricBrief = createNewElement({nameTag: 'p'});
        return { metricTitle, metricBrief };
    });

    const metricTitles = ['## Metric 1', '## Metric 2', '## Metric 3', '## Metric 4', '## Metric 5', '## Metric 6', '## Metric 7', '## Metric 8'];
    const metricBriefs = ['Brief Metric 1 Description', 'Brief Metric 2 Description', 'Brief Metric 3 Description',
                     'Brief Metric 4 Description', 'Brief Metric 5 Description', 'Brief Metric 6 Description',
                     'Brief Metric 7 Description', 'Brief Metric 8 Description'];

    infoContents.forEach((infoContent, index) => {
        infoContent.metricTitle.textContent = metricTitles[index];
        infoContent.metricBrief.textContent = metricBriefs[index];
    });

    infos.forEach((info, index) => {
        info.append(infoContents[index].metricTitle, infoContents[index].metricBrief);
    });

    metrics.forEach((metric, index) => {
        metric.append(imageHolders[index], infos[index]);
        data.append(metric);
    });

    insights.append(image, data);
    statistics.append(p, insights);

    return statistics;
};

function createApp() {
    const app = createNewElement({nameTag: 'div', className: 'app'});
    const appInformation = createNewElement({nameTag: 'div', className: 'app-information'});
    const appImage = createNewElement({nameTag: 'div', className: 'app-image'});

    const appTitle = createNewElement({nameTag: 'p', textContent: 'Download our App!'});
    const br1 = createNewElement({nameTag: 'br'});
    const br2 = createNewElement({nameTag: 'br'});
    const appDescription = createNewElement({nameTag: 'p', textContent: 
        `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et dolore ex perferendis maxime 
         recusandae cupiditate facere, totam maiores consequatur tenetur numquam aperiam ducimus 
         consectetur incidunt sunt, asperiores accusantium eos voluptas. 
         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et dolore ex perferendis maxime 
         recusandae cupiditate facere, totam maiores consequatur tenetur numquam aperiam ducimus 
         consectetur incidunt sunt, asperiores accusantium eos voluptas. 
         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et dolore ex perferendis maxime 
         recusandae cupiditate facere, totam maiores consequatur tenetur numquam aperiam ducimus 
         consectetur incidunt sunt, asperiores accusantium eos voluptas. 
         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et dolore ex perferendis maxime 
         recusandae cupiditate facere, totam maiores consequatur tenetur numquam aperiam ducimus 
         consectetur incidunt sunt, asperiores accusantium eos voluptas.`
    });

    const image = createNewElement({nameTag: 'div', className: 'image'});

    appImage.append(image);
    appInformation.append(appTitle, br1, br2, appDescription);
    app.append(appInformation, appImage);

    return app;
};


export default { createNewElement, createImageContainer, createDiscover, createStatistics, createApp };