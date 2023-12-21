<?php

use App\Http\Controllers\NotesController;
use App\Http\Controllers\Auth\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::post('/register', [UserController::class, 'register']);

Route::post('/login', [UserController::class, 'login']);

Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('/notes', [NotesController::class, 'index']);

    Route::get('/notes/{id}', [NotesController::class, 'show']);

    Route::post('/notes', [NotesController::class, 'store']);

    Route::put('/notes/{id}', [NotesController::class, 'update']);

    Route::delete('/notes/{id}', [NotesController::class, 'destroy']);
});

Route::post('/logout', [UserController::class, 'logout'])->middleware('auth:sanctum');
