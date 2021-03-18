<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CryptoController;
use App\Http\Controllers\BookmarkController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
Route::post('/auth/register', [AuthController::class, 'register']);

Route::post('/auth/login', [AuthController::class, 'login']);

Route::resource('Crypto', CryptoController::class);
Route::resource('Bookmark', BookmarkController::class);

Route::middleware(['auth:sanctum'])->group(function(){
    Route::post('logout', [AuthController::class, 'logout']);
    // Route::post('details', [AuthController::class, 'user_info']);

});