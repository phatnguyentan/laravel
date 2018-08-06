<?php

namespace App\GraphQL\Type;

use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Type as GraphQLType;

class PostType extends GraphQLType
{
    protected $attributes = [
        'name' => 'Post',
        'description' => 'A post'
    ];

    /*
     * Uncomment following line to make the type input object.
     * http://graphql.org/learn/schema/#input-types
     */
    // protected $inputObject = true;

    public function fields()
    {
        return [
            'id' => [
                'type' => Type::nonNull(Type::string()),
                'description' => 'The id of the user'
            ],
            'title' => [
                'type' => Type::string(),
                'description' => 'The title of post'
            ],
            'body' => [
                'type' => Type::string(),
                'description' => 'The body of post'
            ]
        ];/*  */
    }
}