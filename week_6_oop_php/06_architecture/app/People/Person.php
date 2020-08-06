<?php

namespace App\People;

class Person
{
    private $name;
    private $birthdate;

    public function __construct($name, $birthdate)
    {
        $this->name = $name;
        $this->birthdate = $birthdate;
    }

    static function getAges(array $people) : array
    {
        return collect($people)->map(function ($person) {
            return $person->age();
        }, $people)->all();
    }

    public function age() : int
    {
        $dob = new \DateTime($this->birthdate);
        $now = new \DateTime();
        return $now->diff($dob)->y;
    }
}