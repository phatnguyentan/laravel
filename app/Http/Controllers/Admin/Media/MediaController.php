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

class MediaController extends ApiController
{
    protected $table = 'media';
    protected $entity = 'medium';

    public function index(Request $request)
    {
        $this->filter['where'] = array_merge(['core_app_id' => $request->user()->core_app_id], $this->filter['where']);
        $this->filter['limit'] = 15;
        return parent::index($request);
    }

    public function store(Request $request)
    {
        $image = $request->photo;  // your base64 encoded
        $mimeType = $this->getMime($request->photo);
        $image = str_replace("data:{$mimeType};base64,", '', $image);
        $image = str_replace(' ', '+', $image);
        $path = "images/{$request->user()->app()->get()->first()->uuid}/{$request['name']}";
        // Scale
        $image = base64_decode($image);
        $im = new Imagick();
        $im->readimageblob($image);
        $im->thumbnailImage(800, 600, true);
        // ==============
        Storage::disk('public')->put($path, $im->getimageblob());
        $url = config('filesystems.disks.public.url') . "/" . $path;

        $media = $request->user()->media()->create([
            'uuid' => Uuid::generate()->string,
            'name' => $request['name'],
            'extension' => $this->getExtension($request['name']),
            'url' => $url,
            'thumb_url' => $url,
            'mime_type' => $mimeType
        ]);
        return response()->json(['data' => $media]);
    }

    public function getMime($base64)
    {
        preg_match('/data:(\w+\/\w+)/', $base64, $matches);
        if ($matches && $matches[1]) {
            return $matches[1];
        }
        return false;
    }
    public function getExtension($name)
    {
        preg_match('/\w+$/', $name, $matches);
        if ($matches && $matches[0]) {
            return $matches[0];
        }
        return false;
    }

    // public function update(Request $request)
    // {
    //     $category = $request->user()->category()->find($request['post']);
    //     $category->update([
    //         'name' => $request['name'],
    //         'parent_id' => $request['parent_id'],
    //         'type' => $request['type'],
    //         'slug' => $request['title']
    //     ]);
    //     return response()->json(['data' => $category]);
    // }
}
