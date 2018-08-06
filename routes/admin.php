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
        return view('admin');
    });
    Route::get('/{route?}', function () {
        return view('admin');
    })->where('route', '[A-Za-z0-9]+');
});