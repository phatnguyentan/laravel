<?php

namespace App\Http\Controllers\Community;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Log;

class FacebookController extends Controller
{
    public function index()
    {
        $fb = new \Facebook\Facebook([
            'app_id' => '244243916406388',
            'app_secret' => 'a3de033dce098ceeb093667c684ec05e',
            'default_graph_version' => 'v2.10',
  //'default_access_token' => '{access-token}', // optional
        ]);

        $helper = $fb->getRedirectLoginHelper();

        $permissions = ['email']; // Optional permissions
        $loginUrl = $helper->getLoginUrl(' http://localhost:5050/api/community/facebook/callback', $permissions);
        echo '<a href="' . htmlspecialchars($loginUrl) . '">Log in with Facebook!</a>';
        // echo htmlspecialchars($loginUrl);
    }

    public function callback()
    {
        // http ://localhost:5050/?
        // code=AQBuYOyJOAY5eqMX2f0Yw1PkX-9scrgNEzQEUK5XAgPQ-cwBnipLLEyeiwoz2Ce0tvVQ01hzHOl0a9TYyxrJn7uoKwmO0EGjO4cAeBQv8ZkQv1EeP8izC6H1VJBoSCj6K-9jR0DtpZ_2HIgqa6bQLO_RMEkDH75NSicZLIO90vuUspgU9fwV6Vg6JazDLk9806yLVnosNlvEc8Is5J3RKJd9Mvii0mXdsT5Pb2yp_Fnjqra70Yr4FwJ34u1NCx6UqsksCl0Cj5v9AoB4mod8WKUpms4d0xDhN-Qjkk-wjnjsFxTJzQjcqEz8oZdUrjm8WQg0rzResgqGS8HtFGKATrLc
        // &state=ef439be172020efcc0401514ee743def#_=_
        if (!session_id()) {
            session_start();
        }
        $_SESSION['FBRLH_state'] = $_GET['state'];
        $fb = new \Facebook\Facebook([
            'app_id' => '244243916406388', // Replace {app-id} with your app id
            'app_secret' => 'a3de033dce098ceeb093667c684ec05e',
            'default_graph_version' => 'v2.10',
        ]);

        $helper = $fb->getRedirectLoginHelper();

        try {
            $accessToken = $helper->getAccessToken();
        } catch (Facebook\Exceptions\FacebookResponseException $e) {
  // When Graph returns an error
            echo 'Graph returned an error: ' . $e->getMessage();
            exit;
        } catch (Facebook\Exceptions\FacebookSDKException $e) {
  // When validation fails or other local issues
            echo 'Facebook SDK returned an error: ' . $e->getMessage();
            exit;
        }

        if (!isset($accessToken)) {
            if ($helper->getError()) {
                header('HTTP/1.0 401 Unauthorized');
                echo "Error: " . $helper->getError() . "\n";
                echo "Error Code: " . $helper->getErrorCode() . "\n";
                echo "Error Reason: " . $helper->getErrorReason() . "\n";
                echo "Error Description: " . $helper->getErrorDescription() . "\n";
            } else {
                header('HTTP/1.0 400 Bad Request');
                echo 'Bad request';
            }
            exit;
        }

// Logged in
        echo '<h3>Access Token</h3>';
        var_dump($accessToken->getValue());

// The OAuth 2.0 client handler helps us manage access tokens
        $oAuth2Client = $fb->getOAuth2Client();

// Get the access token metadata from /debug_token
        $tokenMetadata = $oAuth2Client->debugToken($accessToken);
        echo '<h3>Metadata</h3>';
        var_dump($tokenMetadata);

// Validation (these will throw FacebookSDKException's when they fail)
        $tokenMetadata->validateAppId('244243916406388'); // Replace {app-id} with your app id
// If you know the user ID this access token belongs to, you can validate it here
//$tokenMetadata->validateUserId('123');
        $tokenMetadata->validateExpiration();

        if (!$accessToken->isLongLived()) {
  // Exchanges a short-lived access token for a long-lived one
            try {
                $accessToken = $oAuth2Client->getLongLivedAccessToken($accessToken);
            } catch (Facebook\Exceptions\FacebookSDKException $e) {
                echo "<p>Error getting long-lived access token: " . $e->getMessage() . "</p>\n\n";
                exit;
            }

            echo '<h3>Long-lived</h3>';
            var_dump($accessToken->getValue());
        }
        // var_dump((string)$accessToken);
        // $_SESSION['fb_access_token'] = (string)$accessToken;

    }

    public function post()
    {
        // curl - F  'method=get' \-F  'fields=about,attire,bio,location,parking,hours,emails,website' \-F 'access_token=EAADeI3fgPnQBAN3ZCEI7RpJSYn2pKFVNj2I4wkJuPKaX0PWdASJO2aX0YATaTAz2fhOw20dqjeHclL1pGVVOpbz04xTEJ3O695dQem7rl0R6GZC0QZCwhKrDZBfPR2XlqCW9oGVZCfQe4pfSI2YkrWhn4hwHWygRsDBbnYbYLTQZDZD' \https ://graph.facebook.com/1905724392807538
        // EAADeI3fgPnQBAN3ZCEI7RpJSYn2pKFVNj2I4wkJuPKaX0PWdASJO2aX0YATaTAz2fhOw20dqjeHclL1pGVVOpbz04xTEJ3O695dQem7rl0R6GZC0QZCwhKrDZBfPR2XlqCW9oGVZCfQe4pfSI2YkrWhn4hwHWygRsDBbnYbYLTQZDZD
        // https://graph.facebook.com/244243916406388/feed?message=Hello Fans!&access_token=EAADeI3fgPnQBAKhID5LHkZCScO69T7ZCCyphqSqWXhP0FUMDABPNxp1WqRUuTIPuVF0UKO3MyhajhXrU5DPkn1f8vA9sGPZAsXWzxfHsxPhqNc0NTGpywuFD7Unp4rv8pKPGTZBDnVM6aP0Yv0IQq2HDxTR08CeU5A9KXr1vogZDZD
    }
}
