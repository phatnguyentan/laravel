<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    //
    protected $guarded = ['id'];

    // protected $appends = array('image');

    // public function getImageAttribute()
    // {
    //     $doc = new \DOMDocument();
    //     @$doc->loadHTML($this->media);

    //     $tags = $doc->getElementsByTagName('img');
    //     $srcs = [];
    //     foreach ($tags as $tag) {
    //         array_push($srcs, $tag->getAttribute('src'));
    //     }
    //     return array_pop($srcs);
    // }
    public function getMediaAttribute($value)
    {
        if (empty($value)) {
            $value = "[]";
        }
        return json_decode($value);
    }

    public function product_types()
    {
        return $this->hasMany('App\Models\ProductType', 'product_id');
    }
}
 