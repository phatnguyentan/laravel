<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Laravel\Passport\Passport;

class CoreApp extends Model
{
    protected $guarded = ['id'];

    public function users()
    {
        return $this->belongsToMany('App\Models\User')->using('App\Models\CoreAppUser');
    }

    public function tokens()
    {
        return $this->belongsToMany(Passport::tokenModel())->using('App\Models\OauthAppToken');
    }
}
