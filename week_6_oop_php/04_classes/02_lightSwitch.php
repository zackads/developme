<?php

require __DIR__ . "/vendor/autoload.php";

class Lightswitch
{
    private $on = false;

    public function isOn()
    {
        return $this->on;
    }

    public function turnOn()
    {
        $this->on = true;
        return $this;
    }

    public function turnOff()
    {
        $this->on = false;
        return $this;
    }
}

$lightSwitch = new LightSwitch();

// you can check whether it is on or not
dump($lightSwitch->isOn()); // false

// you can turn it on
$lightSwitch->turnOn();
dump($lightSwitch->isOn()); // true

// you can turn it on and off again
dump($lightSwitch->turnOn()->turnOff()->isOn()); // false

// you can turn it off
$lightSwitch->turnOff();
dump($lightSwitch->isOn()); // false
