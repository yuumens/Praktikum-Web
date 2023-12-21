<?php

namespace Notes\Note;

trait GenerateID
{
    private static $counter = 0;

    public function getID()
    {
        return ++self::$counter;
    }
}

abstract class Note
{
    public $title;
    public $content;
    public $createdAt;

    public function __construct($title, $content)
    {
        $this->title = $title;
        $this->content = $content;
        $this->createdAt = new \DateTime();
    }

    abstract public function display();

    public function getCreatedAt()
    { 
        return $this->createdAt->format('Y-m-d H:i');
    }
}

class TextNote extends Note
{
    use GenerateID;

    public function display()
    {
        echo "ID: " . $this->getID() . ")\n";
        echo "Title: " . $this->title . "\n";
        echo "Content: " . $this->content . "\n";
        echo "Created At: " . $this->getCreatedAt() . "\n";
    }

    public function getNoteID()
    {
        return $this->getID();
    }
}

