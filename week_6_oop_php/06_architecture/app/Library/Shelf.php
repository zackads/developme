<?php

namespace App\Library;

class Shelf
{
    private $contents = [];

    public function addBook(Book $book) : Shelf
    {
        array_push($this->contents, $book);
        return $this;
    }

    public function titles() : array
    {
        $titles = [];

        foreach ($this->contents as $book) {
            array_push($titles, $book->getTitle());
        }

        return $titles;
    }
}