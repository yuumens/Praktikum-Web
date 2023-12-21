<?php

namespace Notes\app\Models;

include "Notes/app/Config/DatabaseConfig.php";

use Notes\app\Config\DatabaseConfig;
use mysqli;

class Notes extends DatabaseConfig{
    public $conn;

    public function __construct()
    {
        $this->conn = new mysqli($this->host, $this->user, $this->password, $this->database_name, $this->port);
        if($this->conn->connect_error){
            die("Connection Failed: " . $this->conn->connect_error);
        }
    }

    public function findAll(){
        $sql = "SELECT * FROM notes";
        $result = $this->conn->query($sql);
        $this->conn->close();
        $data = [];
        while($row = $result->fetch_assoc()){
            $data[] = $row;
        }

        return $data;
    }

    public function findById($id){
        $sql = "SELECT * FROM notes WHERE id = ?";
        $stmt = $this->conn->prepare($sql);
        $stmt->bind_param("i", $id);
        $stmt->execute();
        $result = $stmt->get_result();
        $this->conn->close();
        $data = [];
        while($row = $result->fetch_assoc()){
            $data[] = $row;
        }

        return $data;
    }

    public function create($data){
        $title = $data['title'];
        $content = $data['content'];

        $query = "INSERT INTO notes (title, content) VALUES (?, ?)";
        $stmt = $this->conn->prepare($query);
        $stmt->bind_param("ss", $title, $content);
        $stmt->execute();
        $this->conn->close();
    }

    public function update($data, $id){
        $title = $data['title'];
        $content = $data['content'];

        $query = "UPDATE notes SET title = ? , content = ? WHERE id = ?";
        $stmt = $this->conn->prepare($query);
        $stmt->bind_param("ssi", $title, $content, $id);
        $stmt->execute();
        $this->conn->close();
    }

    public function destroy($id){
        $query = "DELETE FROM notes WHERE id = ?";
        $stmt = $this->conn->prepare($query);
        $stmt->bind_param("i", $id);
        $stmt->execute();
        $this->conn->close();
    }
}