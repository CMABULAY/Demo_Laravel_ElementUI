<?php
 
use Illuminate\Support\Facades\Route;
 
//login 
Route::group(['middleware' => 'guest'], function () { 
    Route::post('login', 'Guest\LoginController@login');
    Route::post('register', 'Guest\RegisterController@store');
});
  
Route::group(['middleware' => 'api'], function () {
    Route::get('user', 'Auth\UserController@current'); 


    //products
    Route::get('products/get', 'Inventory\InventoryController@get'); 
    Route::post('products/store', 'Inventory\InventoryController@store'); 
    //order
    Route::get('order/get', 'Inventory\OrdersController@get'); 
    Route::post('order/store', 'Inventory\OrdersController@store'); 
 
});