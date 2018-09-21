<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    //
    protected $guarded = ['id'];

    protected $appends = array('image');

    public function getImageAttribute()
    {
        $doc = new \DOMDocument();
        @$doc->loadHTML($this->media);

        $tags = $doc->getElementsByTagName('img');
        $srcs = [];
        foreach ($tags as $tag) {
            array_push($srcs, $tag->getAttribute('src'));
        }
        return array_pop($srcs);
    }
}
 