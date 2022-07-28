<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Access;
use Illuminate\Http\Request;

class AccessController extends Controller
{


    public function index()
    {
        (new Access())->report();
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        
    }
}
