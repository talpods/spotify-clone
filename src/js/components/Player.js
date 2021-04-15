"use strict";

import Component from '../lib/Component';
import data from './Player.json';

class Player extends Component {
    constructor() {
        super(data);
    }
}

export default Player;