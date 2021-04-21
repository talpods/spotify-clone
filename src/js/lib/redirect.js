"use strict";

const locations = {
    home: "/home.html",
    signup: "/signup.html",
    search: "/search.html",
    landing: "/landing.html",
    login: "/login.html",
    playlist: "/playlist.html"
};

const redirect = {
    home() {
        window.location = locations.home;
    },

    signup() {
        window.location = locations.signup;
    },

    search() {
        window.location = locations.search;
    },

    landing() {
        window.location = locations.landing;
    },

    login() {
        window.location = locations.login;
    },

    playlist() {
        window.location = locations.playlist;
    }
};

export {
    locations
};

export default redirect;