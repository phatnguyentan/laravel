<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    // protected $fillable = [
    //     'uuid', 'title', 'body', 'user_id', 'slug', 'core_app_id'
    // ];
    protected $guarded = ['id'];
}
