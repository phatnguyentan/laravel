<?php
namespace App\GraphQL\Mutation;

use GraphQL;
use GraphQL\Type\Definition\Type;
use Folklore\GraphQL\Support\Mutation;
use App\User;

class UpdateUserEmailMutation extends Mutation
{
  protected $attributes = [
    'name' => 'updateUserEmail'
  ];

  public function type()
  {
    return GraphQL::type('User');
  }

  public function args()
  {
    return [
      'id' => ['name' => 'id', 'type' => Type::nonNull(Type::string()), 'rules' => ['required']],
      'email' => ['name' => 'email', 'type' => Type::nonNull(Type::string()), 'rules' => ['required', 'email']]
    ];
  }

  public function resolve($root, $args)
  {
    $user = User::find($args['id']);

    if (!$user) {
      return null;
    }

    $user->email = $args['email'];
    $user->save();

    return $user;
  }
}
