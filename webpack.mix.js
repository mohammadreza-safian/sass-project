let mix = require("laravel-mix");

mix
  .sass("src/Sass/style.scss", "dist/css/style.css")
  .browserSync({server: "dist", proxy: null})
  .disableNotifications();
