let mix = require("laravel-mix");
let webpack = require("webpack");

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
if (process.env.NODE_ENV == "development") {
  mix
    .react("resources/assets/js/app.js", "public/js/moriko/app.local.js")
    .react(
      "resources/assets/admin-js/app.js",
      "public/js/moriko/admin.local.js"
    )
    .sass(
      "resources/assets/admin-sass/app.scss",
      "public/css/moriko/admin.local.css"
    )
    .sass("resources/assets/sass/app.scss", "public/css/moriko/app.local.css");
} else {
  mix
    .react("resources/assets/js/app.js", "public/js/moriko/app.prod.js")
    .react("resources/assets/admin-js/app.js", "public/js/moriko/admin.prod.js")
    .sass(
      "resources/assets/admin-sass/app.scss",
      "public/css/moriko/admin.prod.css"
    )
    .sass("resources/assets/sass/app.scss", "public/css/moriko/app.prod.css");
}

mix.webpackConfig({
  plugins: [
    new webpack.ProvidePlugin({
      "window.Quill": "quill"
    })
  ]
});
