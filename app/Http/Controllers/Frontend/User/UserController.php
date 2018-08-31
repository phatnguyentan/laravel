<?php

namespace App\Http\Controllers\Frontend\User;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Log;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        return response()->json([
            'name' => 'Abigail',
            'state' => 'CA'
        ]);
    }
    public function show(Request $request)
    {
        return response()->json(['data' => User::with('clients')->find($request['user'])]);
    }
}
