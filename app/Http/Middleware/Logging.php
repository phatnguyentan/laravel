<?php

namespace App\Http\Middleware;

use Gate;
use Closure;
use Illuminate\Contracts\Auth\Guard;
use Illuminate\Support\Facades\Log;

class Logging
{
    /**
     * The Guard implementation.
     *
     * @var Guard
     */
    protected $auth;

    /**
     * Create a new filter instance.
     *
     * @param  Guard  $auth
     * @return void
     */
    public function __construct(Guard $auth)
    {
        $this->auth = $auth;
    }

    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        return $next($request);
    }

    public function terminate($request, $response)
    {
        Log::debug('###########################################################');
        Log::debug('REQUEST <=');
        Log::debug($request->method());
        Log::debug($request->path());
        Log::debug($request->all());
    }
}
