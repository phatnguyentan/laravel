<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AttributesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('attributes')->insert(array(
            [
                'name' => 'string',
                'created_at' => new DateTime,
                'updated_at' => new DateTime
            ],
            [
                'name' => 'integer',
                'created_at' => new DateTime,
                'updated_at' => new DateTime
            ],
            [
                'name' => 'decimal',
                'created_at' => new DateTime,
                'updated_at' => new DateTime
            ],
            [
                'name' => 'text',
                'created_at' => new DateTime,
                'updated_at' => new DateTime
            ],
            [
                'name' => 'datetime',
                'created_at' => new DateTime,
                'updated_at' => new DateTime
            ]
        ));
    }
}
