<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Log;

class UserController extends Controller
{
    public function index()
    {
        return response()->json([
            'name' => 'Abigail',
            'state' => 'CA'
        ]);
    }
}
