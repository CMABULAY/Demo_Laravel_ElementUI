<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::get('demo/get','DemoController@get'); 
Route::post('demo/store','DemoController@store'); 
Route::post('demo/update','DemoController@update'); 
Route::post('demo/delete','DemoController@delete'); 