<?php

namespace App\Http\Controllers\Frontend\Category;

use Illuminate\Foundation\Auth\AuthenticatesUsers;
use App\Http\Controllers\ApiController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;
use App\Models\Category;
use Webpatser\Uuid\Uuid;
use Cocur\Slugify\Slugify;
use App\Http\Controllers\Admin\Category\CategoryController as AdminCategoryController;

class CategoryController extends AdminCategoryController
{
    public function index(Request $request)
    {
        $this->filter['where'] = array_merge(['published' => true], $this->filter['where']);
        return parent::index($request);
    }

    public function store(Request $request)
    {

    }

    public function update(Request $request)
    {

    }
}
