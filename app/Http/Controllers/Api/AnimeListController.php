<?php

namespace App\Http\Controllers\Api;

use App\Models\UserAnime;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class AnimeListController extends Controller
{


    // Display all anime lists from user
    public function index(Request $request)
    {
        $user_id = $request->user()->id;
        $animeList = UserAnime::all()->where('user_id', $user_id)->groupBy('list')->reverse();
        return response()->json($animeList);
    }

    public function indexAnime(Request $request, $id)
    {
        $user_id = $request->user()->id;
        $anime = UserAnime::where('user_id', $user_id)->where("id", $id)->get();
        return response()->json($anime);
    }


    // Display a listing corresponding to the list passed in the request (watching, planned, ...)
    public function indexList(Request $request, $list)
    {
        $user_id = $request->user()->id;
        $animeList = UserAnime::all()->where('user_id', $user_id)->where('list', $list);
        return response()->json($animeList);
    }


    // Store new anime entry
    public function store(Request $request)
    {
        // Create a new UserAnime record
        UserAnime::create([
            'id' => $request['id'],
            'title' => $request['title'],
            'format' => $request['format'],
            'episodes' => $request['episodes'],
            'ep_duration' => $request['ep_duration'],
            'user_id' => $request->user()->id,
        ]);

        return response("Anime added", 201);
    }


    // Update the list of an anime
    public function update(Request $request, $id)
    {
        UserAnime::where("id", $id)->update([
            "list" => $request["list"],
            "progress" => $request["progress"],
        ]);

        // Check if progress is equal to number of episoded of the anime, if it is the user has completed it.
        if (UserAnime::where("id", $id)->value("progress") == UserAnime::where("id", $id)->value("episodes")) {
            UserAnime::where("id", $id)->update([
                "list" => "completed",
            ]);
        }

        return response("Anime updated !", 201);
    }

    // Delete existing anime entry
    public function destroy(Request $request, $anime_id)
    {
        UserAnime::where("anime_id", $anime_id)->delete();

        return response("Anime deleted  !", 201);
    }
}
