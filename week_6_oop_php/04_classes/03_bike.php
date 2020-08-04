<?php

require __DIR__ . "/vendor/autoload.php";

class Bike {
    private $make;
    private $model;
    private $mileage = 0;

    public function __construct($make, $model) {
        $this->make = $make;
        $this->model = $model;
    }

    public function getMake() {
        return $this->make;
    }

    public function getModel() {
        return $this->model;
    }

    public function getMileage() {
        return $this->mileage;
    }

    public function addRide($miles) {
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