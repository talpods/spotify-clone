"use strict";

import Component from '../../lib/Component';
import data from './Sidebar.json';
import SideMenu from './SideMenu';
import SideLists from './SideLists';
import {isAuthenticated} from '../../lib/authentication';

class Sidebar extends Component {
    constructor() {
        super(data);

        this.menu = new SideMenu();
        this.menu.mount(this.element);

        if (isAuthenticated()) {
            this.lists = new SideLists();
            this.lists.mount(this.element);
        }
    }
}

const mountSidebar = (container, highlightMenu = "Home") => {
    const component = new Sidebar();
    component.menu.highlight(highlightMenu);
    component.mount(container);
    return component;
}

export default Sidebar;

export {
    mountSidebar
};
