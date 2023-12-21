<?php

namespace Notes\app\Routes;

include "Notes/app/Controller/NotesController.php";

use Notes\app\Controller\NotesController;

class NotesRoutes {
    public function handle($method, $path){
        if($method === 'GET' && $path === '/notes'){
            $controller = new NotesController();
            echo $controller->index();
        }

        if($method === 'GET' && strpos($path, '/notes/') === 0){
            $pathParts = explode('/', $path);
            $id = $pathParts[count($pathParts) - 1 ];

            $controller = new NotesController();
            echo $controller->getById($id);
        }

        if($method === 'POST' && $path === '/notes/create'){
            $controller = new NotesController();
            echo $controller->insert();
        }

        if($method === 'PUT' && strpos($path, '/notes/edit/') === 0 ){
            $pathParts = explode('/', $path);
            $id = $pathParts[count($pathParts) - 1 ];

            $controller = new NotesController();
            echo $controller->update($id);
        }

        if($method === 'DELETE' && strpos($path, '/notes/delete/') === 0 ){
            $pathParts = explode('/', $path);
            $id = $pathParts[count($pathParts) - 1 ];

            $controller = new NotesController();
            echo $controller->delete($id);
        }
    }
}