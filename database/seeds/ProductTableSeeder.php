<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Webpatser\Uuid\Uuid;
use Cocur\Slugify\Slugify;
use App\MyLibs\Utils\CommonUtil;

class ProductTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $slugify = new Slugify();
        DB::table('products')->insert(array(
            [
                'name' => 'Áo thun',
                'uuid' => Uuid::generate()->string,
                'slug' => $slugify->slugify('Áo thun', '-'),
                'core_app_id' => 1,
                'user_id' => 1,
                'description' => '<p>description description description description description description</p>',
                'excerpt' => CommonUtil::get_excerpt('<p>description description description description description description</p>'),
                'created_at' => new DateTime,
                'updated_at' => new DateTime
            ],
        ));
    }
}
