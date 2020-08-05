<?php

namespace App\People;

class Person
{
    private $name;
    private $birthdate;

    static function getAges($people)
    {
        return collect($people)->map(function ($person) {
            return $person->age();
        }, $people)->all();
    }

    public function __construct($name, $birthdate)
    {
        $this->name = $name;
        $this->birthdate = $birthdate;
    }

    public function age()
    {
        $dob = new \DateTime($this->birthdate);
        $now = new \DateTime();
        return $now->diff($dob)->y;
    }
}