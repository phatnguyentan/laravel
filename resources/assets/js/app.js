/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require("./bootstrap");
require("jquery");
// require("jquery-migrate");
require("./jquery-migrate-3.0.0.min.js");
require("jquery-gototop-plugin");
require("owl.carousel");
require("./../edu/js/jquery.waypoints.min.js");
require("./../edu/js/jquery.stellar.min.js");
require("./../edu/js/jquery.flexslider-min.js");
require("./../edu/js/jquery.countTo.js");
require("./../edu/js/jquery.easing.1.3.js");
require("./../edu/js/jquery.magnific-popup.min.js");
require("./../edu/js/magnific-popup-options.js");
require("./../edu/js/main.js");

window.Vue = require("vue");

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component(
  "example-component",
  require("./components/ExampleComponent.vue")
);

const app = new Vue({
  el: "#app"
});
