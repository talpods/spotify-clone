let mix = require('laravel-mix');
mix.disableNotifications();

mix.js('src/js/app.js', 'js')
    .js('src/js/cards.js', 'js')
    .js('src/js/sidebar.js', 'js')
    .js('src/js/toolbar.js', 'js')
    .js('src/js/player.js', 'js')
    .js('src/js/home.js', 'js')
    .js('src/js/search.js', 'js')
    .postCss("src/css/app.css", "css", [
        require("tailwindcss"),
    ])
    .sourceMaps()
    .setPublicPath('public');