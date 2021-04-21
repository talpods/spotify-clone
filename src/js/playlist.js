"use strict";


import {mountSidebar} from "./components/Sidebar/Sidebar";
import {mountPlayer} from './components/Player/Player'
import {mountToolbar} from './components/Toolbar';
import {mountPlaylist} from './components/Playlist/Playlist';


const context = {};

const container = document.querySelector(".playlist");

(async () => {
    context.sidebar = mountSidebar(container, "Library");
    context.toolbar = mountToolbar(container);
    context.player = mountPlayer(container);
    context.mountPlaylist = mountPlaylist(container, context.player, context.toolbar);
})();
