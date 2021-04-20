"use strict";
import { search } from "../lib/data";
import Component from "../lib/Component";
import data from "../components/Toolbar.json";

class Toolbar extends Component {
    constructor() {
        super(data);
        let search = this.element.querySelector(".searchbox");
        search.addEventListener("keyup", this.onSearch.bind(this));
    }

    async fillAll() {
        return await search("");
    }

    async onSearch({ target }) {
        const result = await search(target.value);

        if (this.updateCallback) {
            this.updateCallback(result);
        }
    }

    subscribeSearch(callback) {
        this.updateCallback = callback;
        console.log("subscribe");
    }




}

const mountToolbar = (container) => {
    const component = new Toolbar();
    component.mount(container);
    return component;


};

export default Toolbar;

export {
    mountToolbar
};
