let mix = require('laravel-mix');
mix.disableNotifications();

mix.js('src/js/cards.js', 'dev/js')
    .js('src/js/sidebar.js', 'dev/js')
    .js('src/js/player.js', 'dev/js')
    .js('src/js/toolbar.js', 'js')
    .js('src/js/app.js', 'js')
    .js('src/js/home.js', 'js')
    .js('src/js/search.js', 'js')
    .js('src/js/playlist.js', 'js')
    .js('src/js/landing.js', 'js')
    .js('src/js/login.js', 'js')
    .postCss("src/css/app.css", "css", [
        require("tailwindcss"),
    ])
    .copyDirectory('public/css', 'public/dev/css')
    .copyDirectory('public/img', 'public/dev/img')
    .sourceMaps()
    .setPublicPath('public');
