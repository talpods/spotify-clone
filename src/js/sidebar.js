"use strict";

// contains demo api for sidebar

import {mountSidebar} from './components/Sidebar/Sidebar';

(() => {
    mountSidebar(document.querySelector("#sidebar"), "search");

})();
