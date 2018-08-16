<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\Pivot;

class CoreAppUser extends Pivot
{
    protected $guarded = ['id'];

    public function user()
    {
        return $this->belongsTo('App\Models\User');
    }
    public function app()
    {
        return $this->belongsTo('App\Models\CoreApp');
    }
}
