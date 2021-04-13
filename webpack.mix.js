let mix = require('laravel-mix');
mix.disableNotifications();

mix.js('src/Js/app.js', 'js')
    .postCss("src/Css/app.css", "css", [
        require("tailwindcss"),
    ])
    .sourceMaps()
    .setPublicPath('public');