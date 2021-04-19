"use strict";

const isAuthenticated = () => localStorage["topbeat-auth"] == "true";
const login = (user, password) => localStorage["topbeat-auth"] = "true";
const signup = (user, email, password) => {};
const logout = () => localStorage["topbeat-auth"] = "";


export {
    login,
    logout,
    signup,
    isAuthenticated
};