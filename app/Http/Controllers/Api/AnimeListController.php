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
        $animeList = UserAnime::all()->where('user_id', $user_id)->groupBy('list');

        // custom order (watching list will be first, followed by planned list, ...)
        $sortedAnimeList = $animeList->sortBy(function ($groupedItems, $list) {
            $customOrder = ['watching', 'planned', 'dropped', 'completed'];
            $position = array_search($list, $customOrder);
            return $position;
        });

        return response()->json($sortedAnimeList);
    }

    public function indexAnime(Request $request, $id)
    {
        $user_id = $request->user()->id;
        $anime = UserAnime::where('user_id', $user_id)->where("anime_id", $id)->get();
        return response()->json($anime);
    }

    // Display a listing corresponding to the list passed in the request (watching, planned, ...)
    public function indexList(Request $request, $list)
    {
        $user_id = $request->user()->id;
        $animeList = UserAnime::where('user_id', $user_id)->where('list', $list)->get();

        return response()->json($animeList);
    }


    // Store new anime entry
    public function store(Request $request)
    {
        // Create a new UserAnime record
        UserAnime::create([
            'anime_id' => $request['id'],
            'title' => $request['title'],
            'format' => $request['format'],
            'episodes' => $request['episodes'],
            'ep_duration' => $request['ep_duration'],
            'user_id' => $request->user()->id,
            'image_link' => $request['image_link'],
        ]);

        return response("Anime added sucessfuly !", 201);
    }


    // Update the list of an anime
    public function update(Request $request, $id)
    {
        $user_id = $request->user()->id;

        UserAnime::where('user_id', $user_id)->where("anime_id", $id)->update([
            "list" => $request["list"],
            "progress" => $request["progress"],
        ]);

        $episodes = UserAnime::where('user_id', $user_id)->where("anime_id", $id)->value("episodes");
        $progress = UserAnime::where('user_id', $user_id)->where("anime_id", $id)->value("progress");

        // Check if progress is equal to number of episoded of the anime, if it is the user has completed it.
        if ($progress == $episodes && $episodes != null) {
            UserAnime::where('user_id', $user_id)->where("anime_id", $id)->update([
                "list" => "completed",
            ]);
        }

        return response("Anime updated sucessfuly !", 201);
    }

    // Delete existing anime entry
    public function destroy(Request $request, $id)
    {
        $user_id = $request->user()->id;
        UserAnime::where('user_id', $user_id)->where("anime_id", $id)->delete();

        return response("Anime deleted sucessfuly!", 201);
    }
}
