let mix = require('laravel-mix');

mix.js('src/Js/app.js', 'js')
    .postCss("src/Css/app.css", "css", [
        require("tailwindcss"),
    ])
    .setPublicPath('public');