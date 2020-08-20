<?php

use App\Photo;
use Illuminate\Support\Facades\Route;

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
    $photos = Photo::all();
    return view('index', compact('photos'));
});

Route::get('/img-{id}', function ($id) {
    $photo = Photo::findOrfail($id);
    return view('photo.show', compact('photo'));
});

Auth::routes();

Route::resource('photo', 'PhotoController');

Route::get('/home', 'HomeController@index')->name('home');
