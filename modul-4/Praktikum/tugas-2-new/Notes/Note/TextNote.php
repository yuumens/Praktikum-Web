<?php

namespace Notes\Note;

trait GenerateID
{
    private static $counter = 0;

    protected function getID()
    {
        return ++self::$counter;
    }
}

abstract class Note
{
    protected $title;
    protected $content;

    public function __construct($title, $content)
    {
        $this->title = $title;
        $this->content = $content;
    }

    abstract public function display();
}

class TextNote extends Note
{
    use GenerateID;

    public function display()
    {
        echo "Text Note (ID: " . $this->getID() . ")\n";
        echo "Title: " . $this->title . "\n";
        echo "Content: " . $this->content . "\n";
    }
}

