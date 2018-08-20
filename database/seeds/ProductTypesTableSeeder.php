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
                'name' => 'Sigle Product',
                'default' => true,
                'created_at' => new DateTime,
                'updated_at' => new DateTime
            ],
            [
                'name' => 'Set Products',
                'default' => true,
                'created_at' => new DateTime,
                'updated_at' => new DateTime
            ],
        ));
        // DB::table('product_type_attrs')->insert(array(
        //     [
        //         'product_type_id' => 1,
        //         'name' => 'color',
        //         'type' => 'string',
        //         'created_at' => new DateTime,
        //         'updated_at' => new DateTime
        //     ],
        //     [
        //         'product_type_id' => 1,
        //         'name' => 'price',
        //         'type' => 'integer',
        //         'parent_id' => 1,
        //         'created_at' => new DateTime,
        //         'updated_at' => new DateTime
        //     ],
        //     //================================
        //     [
        //         'product_type_id' => 2,
        //         'name' => 'color',
        //         'type' => 'string',
        //         'created_at' => new DateTime,
        //         'updated_at' => new DateTime
        //     ],
        //     [
        //         'product_type_id' => 2,
        //         'name' => 'price',
        //         'type' => 'integer',
        //         'parent_id' => 1,
        //         'created_at' => new DateTime,
        //         'updated_at' => new DateTime
        //     ],
        //     [
        //         'product_type_id' => 2,
        //         'name' => 'quality',
        //         'type' => 'interger',
        //         'parent_id' => 1,
        //         'created_at' => new DateTime,
        //         'updated_at' => new DateTime
        //     ],
        // ));
    }
}
