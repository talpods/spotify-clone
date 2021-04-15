"use strict";

import Component from '../lib/Component';
import data from './Toolbar.json';

class Toolbar extends Component {
    constructor() {
        super(data);
    }
}

export default Toolbar;