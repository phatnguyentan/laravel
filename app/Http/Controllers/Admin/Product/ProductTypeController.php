<?php

namespace App\Http\Controllers\Admin\Product;

use Illuminate\Foundation\Auth\AuthenticatesUsers;
use App\Http\Controllers\ApiController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;
use App\Models\ProductType;

class ProductTypeController extends ApiController
{
    protected $entity = 'product_type';
    protected $table = 'product_types';

    public function store(Request $request)
    {
        $item = $this->updateOrCreate($request);
        return response()->json(['data' => $item]);
    }

    protected function updateOrCreate(Request $request)
    {
        $item = ProductType::updateOrCreate([
            'id' => $request['id']
        ], [
            'product_id' => $request['product_id'],
            'description' => $request['description'],
            'real_price' => $request['real_price'],
            'price' => $request['price'],
            'discount' => $request['discount'],
            'quality' => $request['quality'],
            'price_unit' => $request['price_unit']
        ]);
        return $item;
    }
}
