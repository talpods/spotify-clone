let mix = require('laravel-mix');
mix.disableNotifications();

mix.js('src/js/app.js', 'js')
   .js('src/js/demo.js', 'js')
   .js('src/js/sidebar.js','js')
   .js('src/js/toolbar.js','js')
   .js('src/js/player.js','js')
    .postCss("src/css/app.css", "css", [
        require("tailwindcss"),
    ])
    .sourceMaps()
    .setPublicPath('public');