<?php

namespace App\Http\Controllers\Frontend\Product;

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
        $this->filter['where'] = array_merge(['published' => true, 'core_app_id' => $this->getApp($request)->id], $this->filter['where']);
        $order = $this->getOrder($request);
        return Product::orderBy(array_keys($order)[0], $order[array_keys($order)[0]])->where($this->getWhere($request))->paginate($this->getLimit($request));
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
            'user_id' => $request->user()->id,
            'core_app_id' => $request->user()->app()->get()->first()->id,
            'excerpt' => CommonUtil::get_excerpt($request['description']),
            'slug' => $slugify->slugify($request['name']),
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
            'excerpt' => CommonUtil::get_excerpt($request['description']),
            'slug' => $slugify->slugify($request['name']),
        ]);
        return response()->json(['data' => $item]);
    }
}
