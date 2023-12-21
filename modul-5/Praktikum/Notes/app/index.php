<?php
header("Content-Type: application/json; charset=UTF-8");

include "Notes/app/Routes/NotesRoutes.php";

use Notes\app\Routes\NotesRoutes;

$method = $_SERVER['REQUEST_METHOD'];
$path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH );

$notesRoute = new NotesRoutes();
// $productRoute->handle($method, $path);
$notesRoute->handle($method, $path);