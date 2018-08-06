<?php
namespace App\GraphQL\Query;

use GraphQL;
use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Query;
use App\Models\Post;
use Auth;
use Illuminate\Support\Facades\Log;
use Rebing\GraphQL\Support\SelectFields;

class PostsQuery extends Query
{
  public function authenticated($root, $args, $context)
  {
    // return !Auth::guest();
    return true;
  }

  protected $attributes = [
    'name' => 'posts'
  ];

  public function type()
  {
    return GraphQL::paginate(GraphQL::type('Post'));
  }

  public function args()
  {
    return [
      'id' => ['name' => 'id', 'type' => Type::string()],
      'page' => [
        'name' => 'page',
        'type' => Type::int(),
        'description' => 'Display a specific page',
      ],
      'limit' => [
        'name' => 'limit',
        'type' => Type::int(),
        'description' => 'Limit the items per page',
      ],
    ];
  }

  public function resolve($root, $args)
  {
    if (isset($args['id'])) {
      // return Post::where('id', $args['id'])->get();
    } else if (isset($args['email'])) {
      // return Post::where('email', $args['email'])->get();
    } else {
      // return Post::all();
      return Post::paginate($args['limit'] ?? 20, ['*'], 'page', $args['page'] ?? 0);
    }
  }
}