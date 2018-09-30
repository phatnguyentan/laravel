<?php

namespace App\Http\Controllers\Admin\Media;

use Illuminate\Foundation\Auth\AuthenticatesUsers;
use App\Http\Controllers\ApiController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;
use App\Models\Category;
use Webpatser\Uuid\Uuid;
use App\MyLibs\File\ImageUpload;
use Illuminate\Support\Facades\Storage;
use Imagick;
use Illuminate\Support\Facades\DB;
use App\Models\AlbumMedia;

class AlbumMediaController extends ApiController
{
    protected $table = 'album_media';
    protected $entity = 'album_medium';

    public function index(Request $request)
    {
        $this->filter['where'] = array_merge(['core_app_id' => $request->user()->core_app_id], $this->filter['where']);
        return AlbumMedia::where($this->getWhere($request))->with('media')->paginate(50);
    }

    public function destroy(Request $request)
    {
        $item = AlbumMedia::where($this->getWhere($request))->delete();
        return response()->json(['data' => $item]);
    }

    protected function updateOrCreate($data, Request $request)
    {
        $item = AlbumMedia::updateOrCreate([
            'album_id' => $data['album_id'],
            'media_id' => $data['media_id']
        ], [
            'album_id' => $data['album_id'],
            'media_id' => $data['media_id'],
            'core_app_id' => $this->getApp($request)->id
        ]);
        return $item;
    }
}
