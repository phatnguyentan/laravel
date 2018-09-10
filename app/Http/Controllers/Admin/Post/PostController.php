<?php

namespace App\Http\Controllers\Admin\Post;

use Illuminate\Foundation\Auth\AuthenticatesUsers;
use App\Http\Controllers\ApiController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;
use Webpatser\Uuid\Uuid;
use App\MyLibs\Utils\CommonUtil;

class PostController extends ApiController
{
    protected $entity = 'post';
    protected $table = 'posts';

    public function index(Request $request)
    {
        return $request->user()->posts()->orderBy('id', 'desc')->paginate(15);
    }

    public function show(Request $request)
    {
        return response()->json(['data' => $request->user()->posts()->find($request['post'])]);
    }

    public function store(Request $request)
    {
        $post = $request->user()->posts()->create([
            'uuid' => Uuid::generate()->string,
            'title' => $request['title'],
            'excerpt' => CommonUtil::get_excerpt($request['description']),
            'body' => $request['body'],
            'category_id' => $request['category_id'],
            'published' => $request['published'],
            'user_id' => $request->user()->id,
            'slug' => $request['title']
        ]);
        return response()->json(array('data' => $post));
    }

    public function duplicate(Request $request)
    {
        $item = $request->user()->posts()->find($request[$this->entity]);
        $post = $request->user()->posts()->create([
            'uuid' => Uuid::generate()->string,
            'title' => $item['title'],
            'body' => $item['body'],
            'category_id' => $item['category_id'],
            'excerpt' => CommonUtil::get_excerpt($item['description']),
            'published' => false,
            'user_id' => $request->user()->id,
            'slug' => $request['title']
        ]);
        return response()->json(['data' => $post]);
    }

    public function update(Request $request)
    {
        $post = $request->user()->posts()->find($request['post']);
        $post->update([
            'title' => $request['title'],
            'body' => $request['body'],
            'category_id' => $request['category_id'],
            'published' => $request['published'],
            'excerpt' => CommonUtil::get_excerpt($request['description']),
            'user_id' => $request->user()->id,
            'slug' => $request['title']
        ]);
        return response()->json(['data' => $post]);
    }

    public function destroy(Request $request)
    {
        $post = $request->user()->posts()->find($request['post']);
        $post->destroy($request['post']);
        return response()->json(['data' => $post]);
    }
}
