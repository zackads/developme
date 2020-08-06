<?php

namespace App\Data;

use Twig\Environment;
use Twig\Loader\FilesystemLoader;

class Post 
{
    private $title;
    private $body;

    public function __construct(string $title)
    {
        $this->title = $title;
    }

    public function setArticle(string $body) : Post
    {
        $this->body = $body;
        return $this;
    }

    public function render() : Post
    {
        $loader = new FilesystemLoader(__DIR__ . '/templates');
        $twig = new Environment($loader);

        echo $twig->render('template.html.twig', [
            'title' => $this->title, 
            'article' => $this->body
        ]);

        return $this;
    }
}