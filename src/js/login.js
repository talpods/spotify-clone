"use strict";

import { login, signup } from "./lib/authentication";
import { locations } from "./lib/redirect";

const form = document.querySelector("#form");

document.querySelector("#login")
    .addEventListener("click", () => {
        login();
        form.setAttribute("action", locations.home);
    });

document.querySelector("#signup")
    .addEventListener("click", () => {
        signup();
        form.setAttribute("action", locations.signup);
    });