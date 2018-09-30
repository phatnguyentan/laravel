<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AlbumMedia extends Model
{
    //
    protected $guarded = ['id'];

    public function media()
    {
        return $this->hasOne('App\Models\Media', 'id', 'media_id');
    }

}
