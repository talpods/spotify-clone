"use strict";

import elementFactory from '../lib/elementFactory';

/**
 * setImageSource() - sets the src attribute for an img element
 * @param {string} source - image url
 * @param {Element} element - target image element
 * @returns
 */
const setImageSource = (source, element) => element.setAttribute("src", source);

/**
 * setImageAlt() - set alt attribute for an img element
 * @param {string} value - alt tescription
 * @param {*} element
 * @returns
 */
const setImageAlt = (alt, element) => element.setAttribute("alt", alt);


/**
 *
 * @param {string} val value to be set as value attribute for inputs or textContent otherwise
 * @param {Element} element - target element
 */
const setValue = (val, element) => {
    if('value' in element) {
        element.value = val;
    } else {
        element.textContent = val;
    }
};


/**
 * getValue() - gets an element value from value property of inputs or textContent
 * @param {Element} element - element to get value from
 * @returns value
 */
const getValue = element => {
    if('value' in element) {
        return element.value
    } else {
       return  element.textContent;
    }
}


class Component {
    constructor(data) {
        this.element = elementFactory(data);
        this.parent = null;
        this.render = null;
    }


    mount(parent) {
        this.element.parent = parent;
        parent.appendChild(this.element);
    }

    append(child) {
        child.parent = this;
        this.element.appendChild(child.element);
    }

    remove() {
        this.element.remove();
    }

    reset() {
        this.element.textContent = "";
    }

    addListener(event, callback) {
        this.addEventListener(event, callback);
    }

    removeListener(event, callback) {
        this.removeEventListener(event, callback);
    }
}

export default Component;

export {
    setValue,
    getValue,
    setImageSource,
    setImageAlt
};