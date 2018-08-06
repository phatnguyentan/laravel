<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
 */

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::prefix('community')->group(function () {
    Route::get('facebook', 'Community\FacebookController@index')->name('community');
    Route::get('facebook/callback', 'Community\FacebookController@callback')->name('community');
    Route::post('facebook/post', 'Community\FacebookController@post')->name('community');
});

Route::prefix('users')->group(function () {
    Route::get('/', 'User\UserController@index')->name('user');
    Route::post('/login', 'User\LoginController@index')->name('user');
});