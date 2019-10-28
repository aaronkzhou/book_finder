<?php

use Illuminate\Support\Str;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('books_infos')->insert([
            'author' => Str::random(10),
            'name' => Str::random(5).'aaron',
            'subtitle' => Str::random(10),
            'description' => Str::random(30),
            'genres'=> Str::random(10),
            'release_date' => '2000/10/10',
            'vote' => '8.1/10',
            'sale_data' => '123123'
        ]);
    }
}
