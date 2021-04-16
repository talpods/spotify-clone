"use strict";

import {mountSidebar} from "./components/Sidebar/Sidebar";
import {mountCategories, mountTracks} from './components/CardCollection';
import {mountPlayer} from './components/Player/Player'
import {Track} from './components/Player/Track';

//import {mount}

import Toolbar from './components/Toolbar';

// TODO: move to Toolbar component
const mountToolbar = (container) => {
    let toolBarContainer = document.getElementById("toolbar");
    const tb = new Toolbar();
    tb.mount(toolBarContainer);
    return toolBarContainer;
};

const context = {};

// select containers
const sidebarContainer = document.querySelector(".sidebar-container");
const  toolbarContainer = document.querySelector(".toolbar-container");
const  categoriesContainer = document.querySelector(".categories-container");
const  traksContainer = document.querySelector(".traks-container");
const  playlistContainer = document.querySelector(".playlist-container");
const  palyerContainer = document.querySelector(".palyer-container");


(async () => {
    context.sidebar = mountSidebar(sidebarContainer);
    //context.toolbar = mountToolbar(toolbarContainer);

    context.categories = mountCategories(categoriesContainer);
    context.tracks = mountTracks(traksContainer);

    context.palyer = mountPlayer(palyerContainer);

})();
