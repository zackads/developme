<?php

namespace App\Library;

class Book
{
    private $title;
    private $totalNumPages;
    private $currentPage = 1;

    public function __construct($title, $totalNumPages)
    {
        $this->title = $title;
        $this->$totalNumPages = $totalNumPages;
    }

    public function read($numPagesToRead)
    {
        $this->currentPage += $numPagesToRead;
    }

    public function currentPage()
    {
        return $this->currentPage;
    }

    public function getTitle()
    {
        return $this->title;
    }
}
