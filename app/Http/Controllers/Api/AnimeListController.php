<?php

namespace App\Http\Controllers\Api;

use App\Models\UserAnime;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class AnimeListController extends Controller
{


    // Display all anime lists form user
    public function index(Request $request)
    {
        $user_id = $request->user()->id;
        $animeList = UserAnime::all()->where('user_id', $user_id);
        return response()->json($animeList);
    }


    // Display a listing corresponding to the list passed in the request (watching, planned, ...)
    public function indexList(Request $request, $list)
    {
        $list = $list == null ? "watching" : $list;
        $user_id = $request->user()->id;
        $animeList = UserAnime::all()->where('user_id', $user_id)->where('list', $list);
        return response()->json($animeList);
    }


    // Store new anime entry
    public function store(Request $request)
    {
        // Create a new UserAnime record
        UserAnime::create([
            'anime_id' => $request['anime_id'],
            'episodes' => $request['episodes'],
            'ep_duration' => $request['ep_duration'],
            'user_id' => $request->user()->id,
        ]);

        return response("Anime added", 201);
    }


    // Update the list of an anime
    public function updateList()
    {

    }

    // Update progress of an anime (if the progress catches the total episodes of that anime the list
    // is changed to "completed" )
    public function updateProgress(Request $request)
    {

    }

    // Delete existing anime entry
    public function destroy(Request $request)
    {

    }
}
