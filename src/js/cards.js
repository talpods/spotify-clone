import { getTracks, getCategories, search, getCategorySlug } from './lib/data';

import Card from './components/Card/Card';
import CardCollection, {mountCategories, mountTracks} from './components/CardCollection';

// the context will be used later for play / stop events
const context = {};



(async () => {

    try {
        context.categories = await mountCategories(document.querySelector("#categories"));
        context.tracks = await mountTracks(document.querySelector("#tracks"));

    } catch (error) {
        console.log(error);
    }

})();




