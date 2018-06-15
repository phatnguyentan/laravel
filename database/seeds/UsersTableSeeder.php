<?php

use Illuminate\Database\Seeder;
use TCG\Voyager\Models\Role;
use TCG\Voyager\Models\User;

class UsersTableSeeder extends Seeder
{
    /**
     * Auto generated seed file.
     *
     * @return void
     */
    public function run()
    {
        if (User::count() == 0) {
            $role = Role::where('name', 'admin')->firstOrFail();

            User::create([
                'name' => 'Admin',
                'email' => 'phatnguyentan0491@gmail.com',
                'password' => '$2y$10$SEP6kFxpQgVBm9KbdOHyreYqjM4XvZjq1/u4/I73IsElF2ew3p0Tq',
                'remember_token' => str_random(60),
                'role_id' => $role->id,
            ]);
        }
    }
}
