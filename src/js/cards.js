import {getTracks, getCategories, search, getCategorySlug} from './lib/data';

import Card from './components/Card';
import CardCollection from './components/CardCollection';

// the context will be used later for play / stop events
const context = {};

const fillCategories = async (container) => {
    const categories = await getCategories();
    const cards = new CardCollection("Categories");

    for(let category of categories) {

        const props = {
            title: category.title,
            text: category.slug,
            image: category.image
        };

        cards.append(new Card(props));
    }

    cards.mount(container);

    return categories;
};

const fillTracks = async (container) => {
    const tracks = await getTracks();
    const cards = new CardCollection("Trakcs");

    for(let track of tracks) {
        const props = {
            title: track.title,
            text: track.author,
            image: track.image
        }

        cards.append(new Card(props));
    }

    cards.mount(container);

    return tracks;
};

(async () => {

    try {
        context.categories = await fillCategories(document.querySelector("#categories"));
        context.tracks = await fillTracks(document.querySelector("#tracks"));
    } catch (error) {
        console.log(error);
    }
})();



