<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class OauthTableSeeder extends Seeder
{
    public function run()
    {
        DB::table('oauth_clients')->insert(array(
            [
                'name' => 'Laravel Personal Access Client',
                'secret' => '9H4QDr0FWADOdn4Vand3HdAOdVQReUu6fdsWk9Ao',
                'redirect' => 'http://localhost',
                'personal_access_client' => 1,
                'password_client' => 0,
                'revoked' => 0,
                'created_at' => new DateTime,
                'updated_at' => new DateTime
            ],
            [
                'name' => 'Laravel Password Grant Client',
                'secret' => '4Q6qu7KV2YqJmX5cOrZgyUEjILh0bCkkjmRBV7lR',
                'redirect' => 'http://localhost',
                'personal_access_client' => 0,
                'password_client' => 1,
                'revoked' => 0,
                'created_at' => new DateTime,
                'updated_at' => new DateTime
            ]
        ));
        DB::table('oauth_personal_access_clients')
            ->insert([
                'client_id' => 1
            ]);
    }
}
