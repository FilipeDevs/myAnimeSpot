<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\UserAnime;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        UserAnime::factory()->create([
            'user_id' => 1,
            'anime_id' => 1,
            'list' => 'watching',
            'progress' => 5,
            'episodes' => 12,
            'ep_duration' => 25,
        ]);
    }
}
