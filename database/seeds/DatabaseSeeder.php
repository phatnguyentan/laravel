<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            ApplicationsTableSeeder::class,
            UsersTableSeeder::class,
            AttributesTableSeeder::class,
            ProductTypesTableSeeder::class,
            CategoryTableSeeder::class,
            PostTableSeeder::class,
            ProductTableSeeder::class,
            OauthTableSeeder::class
        ]);
    }
}
