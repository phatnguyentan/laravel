<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
 */

Route::get('/', function () {
    return view('welcome');
});
Route::get('/home', function () {
    return view('welcome');
});
Route::get('/courses', function () {
    return view('courses');
});
Route::get('/teachers', function () {
    return view('teachers');
});
Route::get('/about', function () {
    return view('about');
});
Route::get('/pricing', function () {
    return view('pricing');
});
Route::get('/blog', function () {
    return view('blog');
});
Route::get('/contact', function () {
    return view('contact');
});

Route::view('/welcome', 'welcome');
Auth::routes();

// Route::get('/home', 'HomeController@index')->name('home');
Route::get('/logout', 'User\LogoutController@logout')->name('user');


Route::group(['prefix' => 'admin'], function () {
    Voyager::routes();
    // Your overwrites here
    // Route::post('login', ['uses' => 'MyAuthController@postLogin', 'as' => 'postlogin']);
});
