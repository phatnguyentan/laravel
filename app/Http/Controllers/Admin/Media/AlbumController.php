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
use App\Models\Album;

class AlbumController extends ApiController
{
    protected $table = 'albums';
    protected $entity = 'album';

    public function index(Request $request)
    {
        $this->filter['where'] = array_merge(['core_app_id' => $request->user()->core_app_id], $this->filter['where']);
        return parent::index($request);
    }

    public function store(Request $request)
    {
        $album = $request->user()->albums()->create([
            'uuid' => Uuid::generate()->string,
            'name' => $request['name'],
        ]);
        return response()->json(['data' => $album]);
    }

    public function update(Request $request)
    {
        $album = $request->user()->albums()->find($request[$this->entity]);
        $album->update([
            'name' => $request['name'],
        ]);
        return response()->json(['data' => $album]);
    }
}
