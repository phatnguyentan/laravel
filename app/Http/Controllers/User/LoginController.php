<?php

namespace App\Http\Controllers\User;

use Illuminate\Foundation\Auth\AuthenticatesUsers;
use App\Http\Controllers\ApiController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class LoginController extends ApiController
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
     */
    use AuthenticatesUsers;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function index(Request $request)
    {
        $this->login($request);
        return response()->json([
            'name' => 'Abigail',
            'state' => 'CA'
        ]);
    }

    // Use user's name to authenticate
    // public function username()
    // {
    //     return 'username';
    // }
}
