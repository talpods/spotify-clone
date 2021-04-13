let mix = require('laravel-mix');
mix.disableNotifications();

mix.js('src/js/app.js', 'js')
    .postCss("src/css/app.css", "css", [
        require("tailwindcss"),
    ])
    .sourceMaps()
    .setPublicPath('public');