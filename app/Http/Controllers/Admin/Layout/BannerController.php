<?php

namespace App\Http\Controllers\Admin\Layout;

use Illuminate\Foundation\Auth\AuthenticatesUsers;
use App\Http\Controllers\ApiController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;
use Webpatser\Uuid\Uuid;
use Cocur\Slugify\Slugify;

class BannerController extends ApiController
{
    protected $table = 'layouts';
    protected $entity = 'banner';

    public function index(Request $request)
    {
        $this->filter['where'] = array_merge(['core_app_id' => $request->user()->core_app_id, 'type' => 'home_banners'], $this->filter['where']);
        $items = parent::index($request)->items();
        return response()->json(['data' => array_pop($items)]);
    }

    public function update(Request $request)
    {
        // $banners = $request->user()->banners();
        Layout::updateOrCreate(
            [
                'type' => $request[$this->entity]
            ],
            [
                'content' => $request['content'],
                'core_app_id' => $request->user()->core_app_id
            ]
        );
        return response()->json(['data' => $banners]);
    }
}
