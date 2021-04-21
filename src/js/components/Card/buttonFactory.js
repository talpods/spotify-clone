"use strict";

import CardButton from './CardButton';
import detail from './buttonFactory.json';

const buttonTypes = {
    add: "add",
    play: "play",
    delete: "delete"
};

const buttonFactory = type  => {
    const props = detail[type];

    if (!props) {
        throw new Error(`Unknown button type: ${type}`)
    }

    return new CardButton(props);
};

export {
    buttonFactory,
    buttonTypes
};