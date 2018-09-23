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
    protected $request;
    protected $createFields = array();
    protected $filter = array(
        'limit' => 20,
        'where' => array(),
        'order' => array('id' => 'decs')
    );

    public function index(Request $request)
    {
        return $this->list($request);
    }

    public function storeList(Request $request)
    {
        $items = [];
        foreach ($request->data as $data) {
            $request = new Request();
            $request->replace($data);
            array_push($items, $this->updateOrCreate($request));
        }
        $func = function ($value) {
            return $value->id;
        };
        $data = DB::table($this->table)->whereIn("id", array_map($func, $items));
        return $data->paginate($this->getLimit($request));
    }

    public function updateList(Request $request)
    {
        $items = [];
        foreach ($request->data as $data) {
            $request = new Request();
            $request->replace($data);
            array_push($items, $this->updateOrCreate($request));
        }
        $func = function ($value) {
            return $value->id;
        };
        $data = DB::table($this->table)->whereIn("id", array_map($func, $items));
        return $data->paginate($this->getLimit($request));
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
    protected function list(Request $request, $query = null)
    {
        if (!$query) {
            $query = DB::table($this->table);
        }
        $where = !empty($request->query('filter')['where']) ? $request->query('filter')['where'] : [];
        $where = array_merge($where, $this->filter['where']);
        $order = $this->filter['order'];
        $limit = !empty($request->query('filter')['limit']) ? $request->query('filter')['limit'] : $this->filter['limit'];
        if ($where) {
            $query = $query->where($where);
        }
        if ($order) {
            $query = $query->orderBy(array_keys($order)[0], $order[array_keys($order)[0]]);
        }
        return $query->paginate($limit);
    }

    protected function getWhere(Request $request)
    {
        $where = !empty($request->query('filter')['where']) ? $request->query('filter')['where'] : [];
        $where = array_merge($where, $this->filter['where']);
        return $where;
    }

    protected function getLimit(Request $request)
    {
        $limit = !empty($request->query('filter')['limit']) ? $request->query('filter')['limit'] : $this->filter['limit'];
        return $limit;
    }
    protected function getOrder(Request $request)
    {
        $order = !empty($request->query('filter')['order']) ? $request->query('filter')['order'] : $this->filter['order'];
        return $order;
    }
}
