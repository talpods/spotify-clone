"use strict";

import Component from "../../lib/Component";
import data from './SideLists.json';

import Link from "./Link";


class SideLists extends Component {
    constructor() {
        super(data);

        this.links = [
            new Link({text: "Create Playlist", to: "playlist.html",img: "img/create.png"}),
            // new Link({text: "Liked Songs", to: "liked.html",img: "img/like.png"}),
        ];

        this.links.forEach(crt => crt.mount(this.element));

    }
}

export default SideLists;