<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $fillable = [
        'title', 'body', 'author_id', 'slug', 'category_id'
    ];

    protected $hidden = [
        'password', 'remember_token',
    ];
}
