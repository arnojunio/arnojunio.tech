<?php

use App\Http\Controllers\API\AccessController;
use App\Http\Controllers\API\BookController;
use App\Http\Controllers\API\UserController;
use App\Http\Controllers\API\BlogController;
use Illuminate\Support\Facades\Route;

Route::get('/blog-list', [BlogController::class, 'index']);
Route::get('/artigo', [BlogController::class, 'blog']);
Route::get('/acesso', [AccessController::class, 'index']);

Route::post('login', [UserController::class, 'login']);
Route::post('register', [UserController::class, 'register']);
Route::post('logout', [UserController::class, 'logout'])->middleware('auth:sanctum');

Route::group(['prefix' => 'books', 'middleware' => 'auth:sanctum'], function () {
    Route::get('/', [BookController::class, 'index']);
    Route::get('/list', [BookController::class, 'list']);
    Route::post('add', [BookController::class, 'add']);
    Route::get('edit/{id}', [BookController::class, 'edit']);
    Route::post('update/{id}', [BookController::class, 'update']);
    Route::delete('delete/{id}', [BookController::class, 'delete']);
});