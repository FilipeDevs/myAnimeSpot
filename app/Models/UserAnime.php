<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class UserAnime extends Model
{

    use HasFactory;
    protected $table = 'user_animes';

    protected $fillable = [
        'id',
        'title',
        'format',
        'user_id',
        'list',
        'progress',
        'episodes',
        'ep_duration',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

}
