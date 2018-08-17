<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\DB;

class ApiController extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    protected $entity;
    protected $table;
    protected $createFields = array();
    protected $filter = array(
        'limit' => 20,
        'where' => array(),
    );

    public function index(Request $request)
    {
        return $this->list($request);
    }

    public function store(Request $request)
    {
        // return $this->list($request);
        // DB::table($this->table);
    }

    public function show(Request $request)
    {
        return response()->json(['data' => DB::table($this->table)->find($request[$this->entity])]);
    }

    public function destroy(Request $request)
    {
        $item = DB::table($this->table)->where('id', $request[$this->entity])->delete();
        return response()->json(['data' => $item]);
    }

    // ==========================================
    protected function list(Request $request)
    {
        $query = DB::table($this->table);
        $where = $request->query('filter')['where'] ? $request->query('filter')['where'] : [];
        $where = array_merge($where, $this->filter['where']);
        if ($where) {
            $query = $query->where($where);
        }
        return $query->paginate($this->filter['limit']);
    }
}
