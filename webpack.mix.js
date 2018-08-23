let mix = require("laravel-mix");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
if (mix.config.production) {
  mix
    .copyDirectory(
      "resources/assets/env/prod/config",
      "resources/assets/admin-js/config"
    )
    .react("resources/assets/js/app.js", "public/js")
    .react("resources/assets/admin-js/app.js", "public/admin-js")
    .sass("resources/assets/admin-sass/app.scss", "public/admin-css")
    .sass("resources/assets/sass/app.scss", "public/css");
} else {
  mix
    .copyDirectory(
      "resources/assets/env/dev/config",
      "resources/assets/admin-js/config"
    )
    .react("resources/assets/js/app.js", "public/js")
    .react("resources/assets/admin-js/app.js", "public/admin-js")
    .sass("resources/assets/admin-sass/app.scss", "public/admin-css")
    .sass("resources/assets/sass/app.scss", "public/css");
}
// mix
//   .react("resources/assets/js/app.js", "public/js")
//   .react("resources/assets/admin-js/app.js", "public/admin-js")
//   .sass("resources/assets/admin-sass/app.scss", "public/admin-css")
//   .sass("resources/assets/sass/app.scss", "public/css");
