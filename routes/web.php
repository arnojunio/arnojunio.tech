<?php

use App\Http\Controllers\WebController;
use Illuminate\Support\Facades\Route;
/*
Route::get('{any}', function () {
    return view('app');
})->where('any', '.*');*/

Route::get('{any}', [WebController::class, 'index'])->where('any', '.*');