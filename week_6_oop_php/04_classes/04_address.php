<?php

require __DIR__ . "/vendor/autoload.php";

class Address
{
    private $street;
    private $postcode;
    private $town;

    public function __construct(string $street, string $postcode, string $town)
    {
        $this->street = $street;
        $this->postcode = $postcode;
        $this->town = $town;
    }

    public function setStreet(string $street) : Address
    {
        $this->street = $street;
        return $this;
    }

    public function setPostcode(string $postcode) : Address
    {
        $this->postcode = $postcode;
        return $this;
    }

    public function setTown(string $town) : Address
    {
        $this->town = $town;
        return $this;
    }

    public function fullAddress() : string
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
