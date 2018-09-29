<?php

namespace App\Models;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Passport\HasApiTokens;

class User extends Authenticatable
{
    use Notifiable;
    use HasApiTokens;
    // protected $fillable = [
    //     'name', 'email', 'password', 'core_app_id'
    // ];
    protected $guarded = ['id'];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function app()
    {
        return $this->hasOne('App\Models\CoreApp', 'id', 'core_app_id');
    }

    public function media()
    {
        return $this->hasMany('App\Models\Media', 'core_app_id', 'core_app_id');
    }

    public function albums()
    {
        return $this->hasMany('App\Models\Album', 'core_app_id', 'core_app_id');
    }

    public function posts()
    {
        return $this->hasMany('App\Models\Post', 'core_app_id', 'core_app_id');
    }

    public function layouts()
    {
        return $this->hasMany('App\Models\Layout', 'core_app_id', 'core_app_id');
    }

    public function products()
    {
        return $this->hasMany('App\Models\Product', 'core_app_id', 'core_app_id');
    }

    public function categories()
    {
        return $this->hasMany('App\Models\Category', 'core_app_id', 'core_app_id');
    }

    public function appTokens()
    {
        return $this->hasMany('App\Models\OauthAppToken');
    }


}
