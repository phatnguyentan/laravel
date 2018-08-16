<?php

namespace App\Http\Controllers\Product;

use Illuminate\Foundation\Auth\AuthenticatesUsers;
use App\Http\Controllers\ApiController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;
use App\Models\Product;

class ProductController extends ApiController
{
    public function index(Request $request)
    {
        return Product::orderBy('id', 'desc')->paginate(15);
    }

    public function show(Request $request)
    {
        return response()->json(['data' => Product::find($request['category'])]);
    }

    public function store(Request $request)
    {
        $post = Product::create([
            'name' => $request['name'],
            'parent_id' => $request['parent_id'],
            'slug' => $request['name'],
        ]);
        return response()->json(['data' => $post]);
    }

    public function destroy(Request $request)
    {
        $item = Product::find($request['product']);
        $item->destroy($request['product']);
        return response()->json(['data' => $item]);
    }
}
