"use strict";
import data from "./ToolbarLanding.json"
import Component from "../../lib/Component"

class ToolbarLanding extends Component {
    constructor() {
        super(data);
    }
}
const mountToolbarLanding = (container) => {
    const component = new ToolbarLanding();
    component.mount(container);
    return component;


};

export default ToolbarLanding;

export {
    mountToolbarLanding
};
