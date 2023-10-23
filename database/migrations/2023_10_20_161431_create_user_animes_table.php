<?php

use App\Models\User;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('user_animes', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('format');
            $table->unsignedBigInteger('anime_id');
            $table->foreignId('user_id');
            $table->enum('list', ['watching', 'planned', 'dropped', 'completed'])->default('watching');
            $table->integer('progress')->default(0);
            $table->integer('episodes')->nullable(true);
            $table->integer('ep_duration')->nullable(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_animes');
    }
};
