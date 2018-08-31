<?php

namespace App\Http\Controllers\Admin\User;

use Illuminate\Foundation\Auth\AuthenticatesUsers;
use App\Http\Controllers\ApiController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;
use App\Models\OauthAppToken;

class AuthController extends ApiController
{

    public $successStatus = 200;
    /**
     * Create user
     *
     * @param  [string] name
     * @param  [string] email
     * @param  [string] password
     * @param  [string] password_confirmation
     * @return [string] message
     */
    public function signup(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'email' => 'required|string|email|unique:users',
            'password' => 'required|string|confirmed'
        ]);
        $user = new User([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password)
        ]);
        $user->save();
        return response()->json([
            'message' => 'Successfully created user!'
        ], 201);
    }
    /** 
     * login api 
     * 
     * @return \Illuminate\Http\Response 
     */
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
            'remember_me' => 'boolean'
        ]);
        $credentials = request(['email', 'password']);
        if (!Auth::attempt($credentials))
            return response()->json([
            'message' => 'Unauthorized'
        ], 401);
        $user = $request->user();
        $tokens = $user->appTokens;
        // TODO compare token apps with user apps
        if ($tokens && $tokens->count() > 0) {
            $token = $tokens[0];
            return response()->json([
                'access_token' => $token->accessToken(),
                'token_type' => 'Bearer',
                'expires_at' => Carbon::parse(
                    $token->expires_at
                )->toDateTimeString()
            ]);
        } else {
            $tokenResult = $user->createToken('Personal Access Token');
            $token = $tokenResult->token;
            if ($request->remember_me)
                $token->expires_at = Carbon::now()->addWeeks(1);
            $token->save();
            OauthAppToken::create(array(
                'core_app_id' => $user->app->id,
                'access_token' => $tokenResult->accessToken,
                'user_id' => $user->id,
                'expires_at' => $tokenResult->token->expires_at
            ));
            return response()->json([
                'access_token' => $tokenResult->accessToken,
                'token_type' => 'Bearer',
                'expires_at' => Carbon::parse(
                    $tokenResult->token->expires_at
                )->toDateTimeString()
            ]);
        }
    }
    /**
     * Logout user (Revoke the token)
     *
     * @return [string] message
     */
    public function logout(Request $request)
    {
        return response()->json([
            'message' => 'Successfully logged out'
        ]);
    }

    /**
     * Get the authenticated User
     *
     * @return [json] user object
     */
    public function user(Request $request)
    {
        return response()->json($request->user());
    }
}
