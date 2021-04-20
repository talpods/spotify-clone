
import { mountSidebar } from "./components/Sidebar/Sidebar";
import { mountPlayer } from './components/Player/Player'
import { mountToolbar } from './components/Toolbar';
import { mountSearch } from "./components/Search/Search"

const context = {};

const container = document.querySelector(".search");

(async () => {

    context.sidebar = mountSidebar(container, "Search");
    context.toolbar = mountToolbar(container);
    context.palyer = mountPlayer(container);
    context.search = mountSearch(container, context.palyer, context.toolbar);

})();

