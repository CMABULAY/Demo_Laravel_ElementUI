<?php
 
use Illuminate\Support\Facades\Route;
 
//login 
Route::group(['middleware' => 'guest'], function () { 
    Route::post('login', 'Guest\LoginController@login');
    Route::post('register', 'Guest\RegisterController@store');
});
  
Route::group(['middleware' => 'api'], function () {
    Route::get('user', 'Auth\UserController@current'); 
 
    //To do
    Route::get('note/get', 'Notes\NoteController@getData'); 
    Route::post('note/save', 'Notes\NoteController@saveData');  
    Route::post('note/update', 'Notes\NoteController@updateData');  
    Route::post('note/delete', 'Notes\NoteController@deleteData');  
 
});