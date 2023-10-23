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
        $animeList = UserAnime::all()->where('user_id', $user_id)->groupBy('list')->reverse();
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
            'title' => $request['title'],
            'format' => $request['format'],
            'anime_id' => $request['anime_id'],
            'episodes' => $request['episodes'],
            'ep_duration' => $request['ep_duration'],
            'user_id' => $request->user()->id,
        ]);

        return response("Anime added", 201);
    }


    // Update the list of an anime
    public function updateList(Request $request, $anime_id)
    {
        UserAnime::where("anime_id", $anime_id)->update([
            "list" => $request["list"],
        ]);

        return response("List changed with success !", 201);
    }

    // Update progress of an anime (if the progress catches the total episodes of that anime the list
    // is changed to "completed" )
    public function updateProgress(Request $request, $anime_id)
    {
        $oldProgress = UserAnime::where("anime_id", $anime_id)->value("progress");

        UserAnime::where("anime_id", $anime_id)->update([
            "progress" => $oldProgress + $request["progress"]
        ]);

        if (UserAnime::where("anime_id", $anime_id)->value("progress") == UserAnime::where("anime_id", $anime_id)->value("episodes")) {
            UserAnime::where("anime_id", $anime_id)->update([
                "list" => "completed",
            ]);
        }

        return response("Progress updated !", 201);
    }

    // Delete existing anime entry
    public function destroy(Request $request, $anime_id)
    {
        UserAnime::where("anime_id", $anime_id)->delete();

        return response("Anime deleted  !", 201);
    }
}
