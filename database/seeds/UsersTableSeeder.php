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
                'name' => str_random(10),
                'email' => str_random(10) . '@gmail.com',
                'password' => bcrypt('12345678'),
                'created_at' => new DateTime,
                'updated_at' => new DateTime
            ],
            [
                'name' => 'phatnguyentan',
                'email' => 'phatnguyentan@gmail.com',
                'password' => bcrypt('Loc2002_bl'),
                'created_at' => new DateTime,
                'updated_at' => new DateTime
            ]
        ));
    }
}
