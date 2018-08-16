<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ApplicationsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('core_apps')->insert(array(
            [
                'name' => 'moriko',
                'created_at' => new DateTime,
                'updated_at' => new DateTime
            ]
        ));
        DB::table('core_app_users')->insert(array(
            [
                'user_id' => 1,
                'core_app_id' => 1,
                'created_at' => new DateTime,
                'updated_at' => new DateTime
            ],
            [
                'user_id' => 2,
                'core_app_id' => 1,
                'created_at' => new DateTime,
                'updated_at' => new DateTime
            ]
        ));
    }
}
