<?php

namespace App\Http\Controllers;

use App\Models\Access;
use Illuminate\Http\Request;

class WebController extends Controller
{
    public function index()
    {
        //(new Access())->report();
        return view('app');
    }
}
