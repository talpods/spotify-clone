"use strict";

const isAuthenticated = () => localStorage["topbeat-auth"];
const login = (user, password) => localStorage["topbeat-auth"] = true;
const signup = (user, email, password) => localStorage["topbeat-auth"] = true;


export {
    login,
    signup,
    isAuthenticated
};