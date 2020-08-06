<?php

require __DIR__ . "/vendor/autoload.php";

class Bike
{
    private $make;
    private $model;
    private $mileage = 0;

    public function __construct(string $make, string $model)
    {
        $this->make = $make;
        $this->model = $model;
    }

    public function getMake() : string
    {
        return $this->make;
    }

    public function getModel() : string
    {
        return $this->model;
    }

    public function getMileage() : int
    {
        return $this->mileage;
    }

    public function addRide(int $miles) : Bike
    {
        $this->mileage += $miles;
        return $this;
    }
}

// you pass in a make and number plate
$bike = new Bike("Specialized", "Roubaix");

// you can get various bits of information about it
dump($bike->getMake()); // "Specialized"
dump($bike->getModel()); // "Roubaix"
dump($bike->getMileage()); // 0

// you can add journey
$bike->addRide(100);
dump($bike->getMileage()); // 100

$bike->addRide(200);
dump($bike->getMileage()); // 300
