<?php

namespace Notes\Controller;

use Notes\Note\TextNote;

class NotesController
{
    public function createTextNote()
    {
        $note = new TextNote("Test", "TestHAHA");
        return $this->formatResponse($note);
    }

    private function formatResponse($note)
    {
        $response = [
            'id' => $note->getID(),
            'title' => $note->title,
            'content' => $note->content,
            'type' => get_class($note),
        ];

        return json_encode($response);
    }
}
