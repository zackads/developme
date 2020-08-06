<?php

require __DIR__ . "/vendor/autoload.php";

class Stringy
{
    private $string;

    public function __construct(string $string)
    {
        $this->string = $string;
    }

    public function lower() : string
    {
        return strtolower($this->string);
    }

    public function upper() : string
    {
        return strtoupper($this->string);
    }

    public function append(string $stringToBeAppended) : string
    {
        return $this->string . $stringToBeAppended;
    }

    public function repeat(int $num) : string
    {
        return str_repeat($this->string, $num);
    }
}

$string = new Stringy("Na");

// it can lowercase a string
dump($string->lower()); // "na"

// it can uppercase a string
dump($string->upper()); // "NA"

// it can concatenate
dump($string->append("blah")); // "Nablah"

// it can repeat a string
dump($string->repeat(5)); // "NaNaNaNaNa"
