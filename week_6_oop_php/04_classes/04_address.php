<?php

require __DIR__ . "/vendor/autoload.php";

class Address
{
    private $street;
    private $postcode;
    private $town;

    public function __construct($street, $postcode, $town)
    {
        $this->street = $street;
        $this->postcode = $postcode;
        $this->town = $town;
    }

    public function setStreet($street)
    {
        $this->street = $street;
        return $this;
    }

    public function setPostcode($postcode)
    {
        $this->postcode = $postcode;
        return $this;
    }

    public function setTown($town)
    {
        $this->town = $town;
        return $this;
    }

    public function fullAddress()
    {
        // Bad solution (insecure, returns ALL object properties)
        // return implode(", ", array_values(get_object_vars($this)));

        // Better solution
        return implode(", ", [
            $this->street,
            $this->town,
            $this->postcode,
        ]);
    }

}

$address = new Address("1 Made Up Street", "BS4 8TR", "Bristol");

// logs the full address neatly
dump($address->fullAddress()); // "1 Made Up Street, Bristol, BS4 8TR"

// can update the street, postcode, and town
$address->setStreet("12 Cantelope Way");
$address->setPostcode("SW5 8RQ");
$address->setTown("Swansea");

// or update the street, postcode and town using method chaining
$address->setStreet("42 Walaby Way")->setPostcode("F1ND N3M0")->setTown("Sydney");

// logs the new full address neatly
dump($address->fullAddress()); // "12 Cantelope Way, Swansea, SW5 8RQ"
