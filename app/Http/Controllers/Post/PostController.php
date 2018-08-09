<?php

namespace App\Http\Controllers\Post;

use Illuminate\Foundation\Auth\AuthenticatesUsers;
use App\Http\Controllers\ApiController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;
use App\Models\Post;

class PostController extends ApiController
{
    public function index(Request $request)
    {
        return Post::orderBy('id', 'desc')->paginate(15);
    }

    public function show(Request $request)
    {
        return response()->json(['data' => Post::find($request['post'])]);
    }

    public function store(Request $request)
    {
        $post = Post::create([
            'title' => $request['title'],
            'body' => $request['body'],
            'author_id' => $request->user()->id,
            'slug' => $request['title'],
            'category_id' => $request['category_id']
        ]);
        return response()->json(['data' => $post]);
    }

    public function update(Request $request)
    {
        $post = Post::find($request['post']);
        $post->update([
            'title' => $request['title'],
            'body' => $request['body'],
            'author_id' => $request->user()->id,
            'slug' => $request['title'],
            'category_id' => $request['category_id']
        ]);
        return response()->json(['data' => $post]);
    }
}
