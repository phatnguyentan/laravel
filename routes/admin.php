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
Route::prefix('admin')->group(function () {
    Route::get('/', function () {
        return view('handbook/admin');
    });
    Route::get('/{route?}', function () {
        return view('handbook/admin');
    })->where('route', '.+');
});

// public resources
Route::prefix('admin-js')->group(function () {
    Route::get('/{route?}', function () {
        return view('handbook/admin');
    })->where('route', '.+');
});

// public resources
Route::prefix('js')->group(function () {
    Route::get('/{route?}', function () {
        return view('handbook/admin');
    })->where('route', '.+');
});
