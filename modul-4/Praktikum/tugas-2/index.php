<?php

require 'vendor/autoload.php';

date_default_timezone_set('Asia/Jakarta');

include"Notes/Controller/NotesController.php";
use Notes\Controller\NotesController;

$controller = new NotesController();

echo $controller->getAllNotes();