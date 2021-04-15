"use strict";

// contains demo api for sidebar

import SideBar from './components/Sidebar/Sidebar';

(() => {
    const container = document.querySelector("#sidebar");
    const el = new SideBar();
    el.menu.highlight("Home");

    el.mount(container);

})();
