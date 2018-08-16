<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    // protected $fillable = [
    //     'name', 'slug', 'parent_id'
    // ];
    protected $guarded = ['id'];

    public function category()
    {
        return $this->belongsTo('App\Models\Category', 'parent_id');
    }
}
