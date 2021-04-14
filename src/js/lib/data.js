// This file contains API for accesing data

"use strict";

const PATH = "https://topinterns.saleem.dev/api/musics";
const TRACKS = `${PATH}/tracks`;
const CATEGORIES = `${PATH}/categories`;
const SEARCH = `${PATH}/search?query=`;

const STATUS_OK = 200;

/**
 * get() - helper function for fetch API
 * @param {string} url
 * @returns promise with array result or null
 */
const get = async (url, name = "tracks") => {

    try {
        const response = await fetch(url);

        if (response.status != STATUS_OK) {
            console.log(`Fetch get status: ${response.status}`);
            return null;
        }

        console.log(response.status);
        const data = await response.json();
        return data [name];
    } catch (error) {
        console.log(error.message);
        return null;
    }

};



/**
 * getTracks() - function for getting tracks data
 * note: call it from an asynchronous function with await
 * @returns promise with tracks array
 */
const getTracks = async () => await get(TRACKS);

/**
 * getCategories() - function for getting categories data
 * note: call it from an asynchronous function with await
 * @returns promise with array of categories
 */
const  getCategories = async () => await get(CATEGORIES, "categories");


/**
 * search() - function for searching
 * @param {string} value for searching
 * @returns promise with array of tracks found (the array might be empty)
 */
const search = async (value) => await get(`${SEARCH}${value}`);

/**
 *
 * @param {string} slug - to search on categories
 * @returns promise with category for the slug or null
 */
const getCategorySlug = async (slug) => await get(`${CATEGORIES}/${slug}`, "category");

export {
    getTracks,
    getCategories,
    search,
    getCategorySlug
};