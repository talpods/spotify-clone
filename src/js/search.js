
import { mountSidebar } from "./components/Sidebar/Sidebar";
import { mountCategories, mountTracks } from './components/CardCollection';
import { mountPlayer } from './components/Player/Player'
import { Track } from './components/Player/Track';

//import {mount}

import Toolbar from './components/Toolbar';

// TODO: move to Toolbar component
const mountToolbar = (container) => {
    const component = new Toolbar();
    component.mount(container);
    return component;
};

const context = {};

// select containers
const sidebarContainer = document.querySelector(".sidebar-container");
const toolbarContainer = document.querySelector(".toolbar-container");

const traksContainer = document.querySelector(".traks-container");

const palyerContainer = document.querySelector(".palyer-container");


(async () => {
    context.sidebar = mountSidebar(sidebarContainer);
    // context.toolbar = mountToolbar(toolbarContainer);
    context.tracks = mountTracks(traksContainer);

    context.palyer = mountPlayer(palyerContainer);

})();
