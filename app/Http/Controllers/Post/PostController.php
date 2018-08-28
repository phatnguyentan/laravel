<?php

namespace App\Http\Controllers\Post;

use Illuminate\Foundation\Auth\AuthenticatesUsers;
use App\Http\Controllers\ApiController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;
use Webpatser\Uuid\Uuid;

class PostController extends ApiController
{
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
            'body' => $request['body'],
            'category_id' => $request['category_id'],
            'published' => $request['published'],
            'user_id' => $request->user()->id,
            'slug' => $request['title']
        ]);
        return response()->json(array('data' => $post));
    }

    public function update(Request $request)
    {
        $post = $request->user()->posts()->find($request['post']);
        $post->update([
            'title' => $request['title'],
            'body' => $request['body'],
            'category_id' => $request['category_id'],
            'published' => $request['published'],
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
