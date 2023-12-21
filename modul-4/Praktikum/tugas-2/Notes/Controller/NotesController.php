<?php

namespace Notes\Controller;

include "Notes/Controller/Controllers.php";

use Notes\Note\TextNote;

class NotesController extends Controller
{
    public $notes = [];

    public function __construct()
    {
        $this->controllerName = "Get All Notes";
        $this->controllerMethod = "GET";
        $this->notes[] = new TextNote("Test", "IDK What I Do");
        $this->notes[] = new TextNote("Pemograman Web", "Modul 4 Pemograman Web");
    }

    public function getAllNotes(){
        $notes_data = [];

        foreach ($this->notes as $note) {
            $notes_data[] = [
                'id' => $note->getNoteID(),
                'title' => $note->title,
                'content' => $note->content,
                'createdAt' => $note->getCreatedAt(),
            ];
        }

        $response = [
            "notes" => $notes_data
        ];

        return $this->formatResponse(200, "Success", $response);
        return $notes_data;
    }

    private function formatResponse($code, $message, $note = null){
        return json_encode([
            "code" => $code,
            "message" => $message,
            "method" => $this->controllerMethod,
            "data" => $note
        ]);
    }
}
