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
    // Route::get('/', 'User\UserController@index')->name('user');
    Route::post('/login', 'User\AuthController@login')->name('user');
    Route::group(['middleware' => 'auth:api'], function () {
        Route::get('logout', 'User\AuthController@logout');
        Route::get('user', 'User\AuthController@user');
    });
});


Route::resource('posts', 'Post\PostController')->middleware('auth:api');
Route::resource('products', 'Product\ProductController')->middleware('auth:api');
Route::resource('product_types', 'Product\ProductTypeController')->middleware('auth:api');
Route::resource('categories', 'Category\CategoryController')->middleware('auth:api');
Route::resource('users', 'User\UserController')->middleware('auth:api');
Route::resource('media', 'Media\MediaController')->middleware('auth:api');