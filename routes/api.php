<?php

use App\Http\Controllers\Api\AnimeListController;
use App\Http\Controllers\Api\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    Route::post('/logout', [AuthController::class, 'logout']);

    Route::get('/anime', [AnimeListController::class, 'index']);

    Route::get('/anime/{list}', [AnimeListController::class, 'indexList']);

    Route::post('/anime', [AnimeListController::class, 'store']);

    Route::put('/anime/{anime}/update-list', [AnimeListController::class, 'updateList']);

    Route::put('/anime/{anime}/update-progress', [AnimeListController::class, 'updateProgress']);

    Route::delete('/anime/{anime}', [AnimeListController::class, 'destroy']);

});


Route::post('/register', [AuthController::class, 'register']);

Route::post('/login', [AuthController::class, 'login']);
