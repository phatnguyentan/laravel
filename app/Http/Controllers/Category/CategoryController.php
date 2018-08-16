<?php

namespace App\Http\Controllers\Category;

use Illuminate\Foundation\Auth\AuthenticatesUsers;
use App\Http\Controllers\ApiController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;
use App\Models\Category;
use Webpatser\Uuid\Uuid;

class CategoryController extends ApiController
{
    public function index(Request $request)
    {
        return $request->user()->categories()->with('category')->orderBy('id', 'desc')->paginate(15);
    }

    public function show(Request $request)
    {
        return response()->json(['data' => $request->user()->categories()->find($request['category'])]);
    }

    public function store(Request $request)
    {
        $post = $request->user()->categories()->create([
            'uuid' => Uuid::generate()->string,
            'name' => $request['name'],
            'parent_id' => $request['parent_id'],
            'slug' => $request['name'],
        ]);
        return response()->json(['data' => $post]);
    }

    public function destroy(Request $request)
    {
        $item = Category::find($request['category']);
        $item->destroy($request['category']);
        return response()->json(['data' => $item]);
    }
}
