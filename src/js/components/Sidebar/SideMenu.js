"use strict";

import Component from '../../lib/Component';
import Link from './Link';

import data from './SideMenu.json';

class SideMenu extends Component {
    constructor() {
        super(data);

        this.links = [
            new Link({text: "Home", to: "home.html",img: "img/home.png"}),
            new Link({text: "Search", to: "search.html",img: "img/search.png"}),
            new Link({text: "Library",to: "playlist.html", img: "img/library.png"})
        ];

        this.links.forEach(crt => crt.mount(this.element));
    }

    highlight(name) {
        this.links.forEach(crt => crt.highlight(crt.text === name));
    }
}

export default SideMenu;