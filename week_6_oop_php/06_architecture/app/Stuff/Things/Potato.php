<?php

namespace App\Stuff\Things;

class Potato
{
    private $timesWatered = 0;

    public function water()
    {
        $this->timesWatered += 1;
        return $this;
    }

    public function hasGrown()
    {
        return $this->timesWatered >= 5;
    }
}
