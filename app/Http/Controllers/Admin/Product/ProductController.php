<?php

namespace App\Http\Controllers\Admin\Product;

use Illuminate\Foundation\Auth\AuthenticatesUsers;
use App\Http\Controllers\ApiController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;
use App\Models\Product;
use Cocur\Slugify\Slugify;
use Webpatser\Uuid\Uuid;
use App\MyLibs\Utils\CommonUtil;

class ProductController extends ApiController
{
    protected $entity = 'product';
    protected $table = 'products';

    public function index(Request $request)
    {
        return Product::orderBy('id', 'desc')->paginate(15);
    }

    public function store(Request $request)
    {
        $slugify = new Slugify();
        $item = Product::create([
            'name' => $request['name'],
            'uuid' => Uuid::generate()->string,
            'category_id' => $request['category_id'],
            'description' => $request['description'],
            'media' => $request['media'],
            'published' => $request['published'],
            'new' => $request['new'],
            'hot' => $request['hot'],
            'user_id' => $request->user()->id,
            'core_app_id' => $request->user()->app()->get()->first()->id,
            'excerpt' => CommonUtil::get_excerpt($request['description']),
            'slug' => $slugify->slugify($request['name']),
        ]);
        return response()->json(['data' => $item]);
    }

    public function duplicate(Request $request)
    {
        $item = $request->user()->products()->find($request[$this->entity]);
        $item = Product::create([
            'name' => $item['name'],
            'uuid' => Uuid::generate()->string,
            'category_id' => $item['category_id'],
            'description' => $item['description'],
            'media' => $item['media'],
            'published' => false,
            'user_id' => $item['user_id'],
            'new' => $item['new'],
            'hot' => $item['hot'],
            'core_app_id' => $item['core_app_id'],
            'excerpt' => $item['excerpt'],
            'slug' => $item['slug'],
        ]);
        return response()->json(['data' => $item]);
    }

    public function update(Request $request)
    {
        $slugify = new Slugify();
        $item = $request->user()->products()->find($request[$this->entity]);
        $item->update([
            'name' => $request['name'],
            'media' => $request['media'],
            'category_id' => $request['category_id'],
            'published' => $request['published'],
            'description' => $request['description'],
            'new' => $request['new'],
            'hot' => $request['hot'],
            'excerpt' => CommonUtil::get_excerpt($request['description']),
            'slug' => $slugify->slugify($request['name']),
        ]);
        return response()->json(['data' => $item]);
    }
}
