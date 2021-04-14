import {getTracks, getCategories, search, getCategorySlug} from './lib/data';

(async () => {
    const tracks = await getTracks();
    console.log(tracks);

    const categories = await getCategories();
    console.log(categories);

    const result = await search("manele");
    console.log(result);

    const slug = await getCategorySlug("hip-hop");
    console.log(slug);

})();