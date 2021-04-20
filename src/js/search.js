
import { mountSidebar } from "./components/Sidebar/Sidebar";
import { mountTracks } from './components/CardCollection';
import { mountPlayer } from './components/Player/Player'
import { mountToolbar } from './components/Toolbar';
import { mountSearch } from "../../src/js/components/search/search"

const context = {};

const container = document.querySelector(".home");

(async () => {

    context.tracks = mountTracks(container);
    context.sidebar = mountSidebar(container);
    context.palyer = mountPlayer(container);
    context.toolbar = mountToolbar(container);

    context.search = mountSearch(container, context.palyer);

})();

