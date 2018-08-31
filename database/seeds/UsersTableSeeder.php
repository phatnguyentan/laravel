<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert(array(
            [
                'name' => 'moriko_admin',
                'uuid' => Uuid::generate()->string,
                'email' => 'moriko_admin@gmail.com',
                'password' => bcrypt('12345678'),
                'core_app_id' => 1,
                'admin' => 1,
                'created_at' => new DateTime,
                'updated_at' => new DateTime
            ],
            [
                'name' => 'moriko_guest',
                'uuid' => Uuid::generate()->string,
                'email' => 'moriko_guest@gmail.com',
                'password' => bcrypt('12345678'),
                'core_app_id' => 1,
                'admin' => 0,
                'created_at' => new DateTime,
                'updated_at' => new DateTime
            ],
        ));
    }
}
