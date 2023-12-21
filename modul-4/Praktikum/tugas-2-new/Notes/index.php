<?php

include"Notes/Controller/NotesController.php";
use Notes\Controller\NotesController;

$controller = new NotesController();

$textNoteResponse = $controller->createTextNote();

echo "Text Note Response:\n";
echo $textNoteResponse . "\n";

