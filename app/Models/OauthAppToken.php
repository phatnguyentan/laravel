<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class OauthAppToken extends Model
{
    // protected $fillable = [
    //     'core_app_id', 'user_id', 'access_token', 'expires_at'
    // ];
    protected $guarded = ['id'];

    public function accessToken()
    {
        return $this->access_token;
    }
}
