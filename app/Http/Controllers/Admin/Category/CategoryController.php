<?php

namespace App\Http\Controllers\Admin\Category;

use Illuminate\Foundation\Auth\AuthenticatesUsers;
use App\Http\Controllers\ApiController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;
use App\Models\Category;
use Webpatser\Uuid\Uuid;
use Cocur\Slugify\Slugify;

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
        $slugify = new Slugify();
        $category = $request->user()->categories()->create([
            'uuid' => Uuid::generate()->string,
            'name' => $request['name'],
            'parent_id' => $request['parent_id'],
            'published' => $request['published'],
            'type' => $request['type'],
            'slug' => $slugify->slugify($request['name']),
        ]);
        return response()->json(['data' => $category]);
    }

    public function duplicate(Request $request)
    {
        $item = $request->user()->categories()->find($request[$this->entity]);
        $category = $request->user()->categories()->create([
            'uuid' => Uuid::generate()->string,
            'name' => $item['name'],
            'parent_id' => $item['parent_id'],
            'published' => false,
            'type' => $item['type'],
            'slug' => $item['slug'],
        ]);
        return response()->json(['data' => $category]);
    }

    public function update(Request $request)
    {
        $slugify = new Slugify();
        $category = $request->user()->categories()->find($request[$this->entity]);
        $category->update([
            'name' => $request['name'],
            'parent_id' => $request['parent_id'],
            'published' => $request['published'],
            'slug' => $slugify->slugify($request['title'])
        ]);
        return response()->json(['data' => $category]);
    }
}
