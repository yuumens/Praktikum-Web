<?php

namespace Notes\app\Controller;

include "Notes/app/Traits/ApiResponseFormatter.php";
include "Notes/app/Models/Notes.php";

use Notes\app\Models\Notes;
use Notes\app\Traits\ApiResponseFormatter;

class NotesController{
    use ApiResponseFormatter;

    public function index(){
        $notesModel = new Notes();
        $response = $notesModel->findAll();
        return $this->apiResponse(200, "Success", $response);
    }

    public function getById($id){
        $notesModel = new Notes();
        $response = $notesModel->findById($id);
        return $this->apiResponse(200, "success", $response);
    }

    public function insert(){
        $jsonInput = file_get_contents('php://input');
        $inputData = json_decode($jsonInput, true);
        if(json_last_error()){
            return $this->apiResponse(400, "error invalid input", null);
        }

        $notesModel = new Notes();
        $response = $notesModel->create([
            "title" => $inputData['title'],
            "content" => $inputData['content']
        ]);

        return $this->apiResponse(200, "success", $response);
    }

    public function update($id){
        $jsonInput = file_get_contents('php://input');
        $inputData = json_decode($jsonInput, true);
        $inputData1 = json_decode($jsonInput, true);
        if(json_last_error()){
            return $this->apiResponse(400, "error invalid input", null);
        }

        $notesModel = new Notes();
        $response = $notesModel->update([
            "title" => $inputData['title'],
            "content" => $inputData['content']
        ], $id);

        return $this->apiResponse(200, "success", $response);
    }

    public function delete($id){
        $notesModel = new Notes();
        $response = $notesModel->destroy($id);

        return $this->apiResponse(200, "success", $response);
    }
}