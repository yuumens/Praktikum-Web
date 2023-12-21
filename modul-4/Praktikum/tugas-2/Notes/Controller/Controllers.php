<?php

namespace Notes\Controller;

class Controller{
    var $controllerName;
    var $controllerMethod;

    public function getControllerAttribute(){
        return[
            $this->controllerMethod
        ];
        
    }
}