"use strict";

import Component from '../lib/Component';
import data from './Sidebar.json';

class Sidebar extends Component {
    constructor() {
        super(data);
    }
}

export default Sidebar;