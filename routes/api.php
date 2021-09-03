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
//screen1
Route::get('get1','DemoListController@get1');
Route::post('store1','DemoListController@store1'); 

//screen2
Route::get('get','DemoListController@get');
Route::post('store','DemoListController@store'); 
Route::post('actions','DemoListController@actions');  
Route::post('actions1','DemoListController@actions1');  