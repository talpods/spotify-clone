"use strict|";

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
    if ('value' in element) {
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
    if ('value' in element) {
        return element.value
    } else {
        return element.textContent;
    }
}

/**
 * Base class for component object
 */
class Component {
    /**
     *
     * @param {JSON} data - JSON containing DOM structure representation
     */
    constructor(data, props) {
        this.element = elementFactory(data);
        this.parent = null;
        this.props = props;
    }


    /**
     * nount() - method for mounting component to the parent DOM element
     * @param {Element} parent - html parent element for mounting
     */
    mount(parent) {
        this.element.parent = parent;
        parent.appendChild(this.element);
    }

    /**
     * append() - add a child component
     * @param {Component} child - child component
     */
    append(child) {
        child.parent = this;
        this.element.appendChild(child.element);
    }

    /**
     * remove() - remove component from DOM
     */
    remove() {
        this.element.remove();
    }

    /**
     * reset() - reset the component content
     */
    reset() {
        this.element.textContent = "";
    }

    /**
     * show() - display or hide the component
     * @param {boolean} value - true / false
     */
    show(value) {
        if (!value) {
            this.element.classList.add("hidden");
        } else {
            this.element.classList.remove("hidden");
        }
    }

    /**
     * addListener() - method for adding a listener to the component
     * @param {string} event - name of the event
     * @param {function} callback - handler function
     * @param {object} bindObj - object for binding if necessary to access this inside callback
     * @returns - handler, it is useful for removing in case of binding
     */
    addListener(event, callback, bindObj) {
        // if a bind object is passing we will bind it to
        // preserve this reference in the handler
        // more details in https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind
        const handler = bindObj ? callback.bind(bindObj) : callback;
        this.element.addEventListener(event, handler);
        return handler;
    }

    /**
     * removeListener() - remove listener from component
     * @param {string} event - name of the event
     * @param {callback} callback - handler to be removed
     */
    removeListener(event, callback) {
        this.element.removeEventListener(event, callback);
    }
}

export default Component;

export {
    setValue,
    getValue,
    setImageSource,
    setImageAlt
};