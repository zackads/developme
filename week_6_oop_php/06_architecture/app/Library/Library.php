<?php

namespace App\Library;

class Library
{
    private $shelves = [];
    
    public function addShelf(Shelf $shelf) : Library
    {
        array_push($this->shelves, $shelf);
        return $this;
    }

    public function titles() : array
    {
        $titles = [];
        
        foreach ($this->shelves as $shelf) {
            $titles = array_merge($titles, $shelf->titles());
        }

        return $titles;
    }

    public function shelves() : array
    {
        return $this->shelves;
    }
}