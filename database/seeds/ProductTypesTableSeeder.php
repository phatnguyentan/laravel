<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductTypesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('product_types')->insert(array(
            [
                'name' => 'clothing',
                'created_at' => new DateTime,
                'updated_at' => new DateTime
            ],
            [
                'name' => 'clothing_freesize',
                'created_at' => new DateTime,
                'updated_at' => new DateTime
            ],
        ));
        DB::table('product_type_attrs')->insert(array(
            [
                'product_type_id' => 1,
                'name' => 'set',
                'type' => 'set',
                'parent_id' => 0,
                'created_at' => new DateTime,
                'updated_at' => new DateTime
            ],
            [
                'product_type_id' => 1,
                'name' => 'color',
                'type' => 'string',
                'parent_id' => 1,
                'created_at' => new DateTime,
                'updated_at' => new DateTime
            ],
            [
                'product_type_id' => 1,
                'name' => 'price',
                'type' => 'integer',
                'parent_id' => 1,
                'created_at' => new DateTime,
                'updated_at' => new DateTime
            ],
            [
                'product_type_id' => 1,
                'name' => 'quality',
                'type' => 'interger',
                'parent_id' => 1,
                'created_at' => new DateTime,
                'updated_at' => new DateTime
            ],
        ));
    }
}
