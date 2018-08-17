<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class OauthAppToken extends Model
{
    protected $guarded = ['id'];

    public function accessToken()
    {
        return $this->access_token;
    }
}
