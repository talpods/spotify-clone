"use strict";

/**
 * createElement() - create element with structure specified in JSON
 * @param {JSON} json - content structure in JSON format
 * @returns element with descendents from the format
 */
const createElement = json => {
    const element = document.createElement(json.tagName);

    element.className = json.className || "";

    const attributes =  json.attributes || [];
    for(let att of attributes) {
        element.setAttribute(att.name, att.value);
    }

    element.dataset.comment = json.comment;

    const children = json.children || [];

    for(let child of children) {
        let desc = createElement(child);
        element.appendChild(desc);
    }

    if (json.textContent) {
        element.textContent  = json.textContent;
    }

    return element;
};


export default createElement;