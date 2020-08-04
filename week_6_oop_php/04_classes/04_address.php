<?php

require __DIR__ . "/vendor/autoload.php";

class Address 
{
    private $street;
    private $postcode;
    private $town;

    public function __construct($street, $postcode, $town) {
        $this->street = $street;
        $this->postcode = $postcode;
        $this->town = $town;
    }

    public function setStreet($street) {
        $this->street = $street;
    }

    public function setPostcode($postcode) {
        $this->postcode = $postcode;
    }

    public function setTown($town) {
        $this->town = $town;
    }

    public function fullAddress() {
        return implode(", ", array_values(get_object_vars($this)));
    }

}

$address = new Address("1 Made Up Street", "BS4 8TR", "Bristol");

// logs the full address neatly
dump($address->fullAddress()); // "1 Made Up Street, Bristol, BS4 8TR"

// can update the street, postcode, and town
$address->setStreet("12 Cantelope Way");
$address->setPostcode("SW5 8RQ");
$address->setTown("Swansea");

// logs the new full address neatly
dump($address->fullAddress()); // "12 Cantelope Way, Swansea, SW5 8RQ"