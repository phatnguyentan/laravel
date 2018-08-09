<?php

namespace App\Http\Controllers\Category;

use Illuminate\Foundation\Auth\AuthenticatesUsers;
use App\Http\Controllers\ApiController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;
use App\Models\Category;

class CategoryController extends ApiController
{
    public function index(Request $request)
    {
        return Category::paginate(15);
    }

    public function show(Request $request)
    {
        return response()->json(['data' => Category::find($request['id'])]);
    }
}
