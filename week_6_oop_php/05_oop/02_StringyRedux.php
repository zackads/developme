<?php

require __DIR__ . "/vendor/autoload.php";

class StringyRedux
{
    private $string;

    public function __construct($string)
    {
        $this->string = $string;
    }

    public function lower() : StringyRedux
    {
        $this->string = strtolower($this->string);
        return $this;
    }

    public function upper() : StringyRedux
    {
        $this->string = strtoupper($this->string);
        return $this;
    }

    public function append(string $stringToBeAppended) : StringyRedux
    {
        $this->string .= $stringToBeAppended;
        return $this;
    }

    public function repeat(int $num) : StringyRedux
    {
        $this->string = str_repeat($this->string, $num);
        return $this;
    }

    public function get() : string
    {
        return $this->string;
    }
}

$string1 = new StringyRedux("Oop");
dump($string1->lower()->repeat(2)->get()); // "oopoop"

$string2 = new StringyRedux("Spoon");
dump($string2->repeat(2)->upper()->append("!")->get()); // "SPOONSPOON!"

$string3 = new StringyRedux("Na");
dump($string3->repeat(2)->append(" ")->repeat(8)->append(" ")->append("Batman!")->get()); // "NaNa NaNa NaNa NaNa NaNa NaNa NaNa NaNa  Batman!"
