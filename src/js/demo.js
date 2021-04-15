//import {getTracks, getCategories, search, getCategorySlug} from './lib/data';

import Card from './copmponents/Card';

const container = document.querySelector("#demo");
const card = new Card("Hip Hop", "hip-hop", "https://topinterns.saleem.dev/images/music-categories/3.png");

container.appendChild(card.element);

