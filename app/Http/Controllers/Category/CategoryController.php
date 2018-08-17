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
    protected $table = 'categories';
    protected $entity = 'category';

    public function index(Request $request)
    {
        $this->filter['where'] = array_merge(['core_app_id' => $request->user()->core_app_id], $this->filter['where']);
        return parent::index($request);
    }

    public function store(Request $request)
    {
        $category = $request->user()->categories()->create([
            'uuid' => Uuid::generate()->string,
            'name' => $request['name'],
            'parent_id' => $request['parent_id'],
            'type' => $request['type'],
            'slug' => $request['name'],
        ]);
        return response()->json(['data' => $category]);
    }

    public function update(Request $request)
    {
        $category = $request->user()->category()->find($request['post']);
        $category->update([
            'name' => $request['name'],
            'parent_id' => $request['parent_id'],
            'type' => $request['type'],
            'slug' => $request['title']
        ]);
        return response()->json(['data' => $category]);
    }
}
