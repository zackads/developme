<?php

namespace App\Data;

use Twig\Environment;
use Twig\Loader\FilesystemLoader;

class Post 
{
    private $title;
    private $body;

    public function __construct($title) 
    {
        $this->title = $title;
        return $this;
    }

    public function setArticle($body)
    {
        $this->body = $body;
        return $this;
    }

    public function render()
    {
        $loader = new FilesystemLoader(__DIR__ . '/templates');
        $twig = new Environment($loader);

        echo $twig->render('template.html.twig', [
            'title' => $this->title, 
            'article' => $this->body
        ]);
    }
}