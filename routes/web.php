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
    return view('moriko/frontend');
});

Route::view('/welcome', 'moriko/frontend');
Route::view('/products', 'moriko/frontend');
Route::view('/hang-moi', 'moriko/frontend');
Route::view('/ban-chay', 'moriko/frontend');
Route::view('/products/{route?}', 'moriko/frontend')->where('route', '.+');
Route::view('/categories/{route?}', 'moriko/frontend')->where('route', '.+');
Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
