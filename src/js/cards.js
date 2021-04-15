import {getTracks, getCategories, search, getCategorySlug} from './lib/data';

import Card from './components/Card';
import CardCollection from './components/CardCollection';

const container = document.querySelector("#demo");


(async () => {
    const categories = await getCategories();
    const cards = new CardCollection("Categories");

    for(let category of categories) {
        cards.append(new Card(category.title, category.slug, category.image));
    }

    cards.mount(container);
})();



