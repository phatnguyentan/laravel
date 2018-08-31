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
Route::prefix('admin')->group(function () {
    Route::resource('posts', 'Admin\Post\PostController')->middleware('auth.admin:api');
    Route::post('posts/{post}/duplicate', 'Admin\Post\PostController@duplicate')->middleware('auth.admin:api');

    Route::resource('products', 'Admin\Product\ProductController')->middleware('auth.admin:api');
    Route::post('products/{product}/duplicate', 'Admin\Product\ProductController@duplicate')->middleware('auth.admin:api');

    Route::resource('product_types', 'Admin\Product\ProductTypeController')->middleware('auth.admin:api');
    Route::resource('categories', 'Admin\Category\CategoryController')->middleware('auth.admin:api');
    Route::post('categories/{category}/duplicate', 'Admin\Category\CategoryController@duplicate')->middleware('auth.admin:api');

    Route::resource('users', 'Admin\User\UserController')->middleware('auth.admin:api');
    Route::resource('media', 'Admin\Media\MediaController')->middleware('auth.admin:api');
    Route::post('users/login', 'User\AuthController@login')->name('user');
});

Route::prefix('frontend')->group(function () {
    Route::resource('posts', 'Frontend\Post\PostController')->middleware('auth:api');
    Route::resource('products', 'Frontend\Product\ProductController')->middleware('auth:api');
    Route::resource('product_types', 'Frontend\Product\ProductTypeController')->middleware('auth:api');
    Route::resource('categories', 'Frontend\Category\CategoryController')->middleware('auth:api');
    Route::resource('media', 'Frontend\Media\MediaController')->middleware('auth:api');
});