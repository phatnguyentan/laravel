<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Webpatser\Uuid\Uuid;
use Cocur\Slugify\Slugify;

class CategoryTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $slugify = new Slugify();
        DB::table('categories')->insert(array(
            [
                'name' => 'Quảng cáo',
                'uuid' => Uuid::generate()->string,
                'slug' => $slugify->slugify('Quảng cáo', '-'),
                'type' => 'post',
                'core_app_id' => 1,
                'active' => true,
                'created_at' => new DateTime,
                'updated_at' => new DateTime
            ],
            [
                'name' => 'Thú Bông',
                'uuid' => Uuid::generate()->string,
                'slug' => $slugify->slugify('Thú Bông', '-'),
                'type' => 'product',
                'core_app_id' => 1,
                'active' => true,
                'created_at' => new DateTime,
                'updated_at' => new DateTime
            ],
        ));
    }
}
