<?php

namespace App\Http\Controllers\Admin\Product;

use Illuminate\Foundation\Auth\AuthenticatesUsers;
use App\Http\Controllers\ApiController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;
use App\Models\Product;

class ProductTypeController extends ApiController
{
    protected $entity = 'product_type';
    protected $table = 'product_types';
}
