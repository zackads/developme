<?php

require_once __DIR__ . "/vendor/autoload.php";

// Q1

echo "\nQuestion 1:\n";

use App\Hello;

$sayHi = new Hello();

dump($sayHi->hello("Orb")); // "Hello Orb"
dump($sayHi->hello("Horse")); // "Hello Horse"

// Q2
echo "\nQuestion 2\n";

use App\Person;

$person1 = new Person("Lynne", "Ramsay");
$person2 = new Person("Wes", "Anderson");

dump($person1->sayHelloTo($person2)); // "Hello Wes Anderson"
dump($person2->sayHelloTo($person1)); // "Hello Lynne Ramsay"

// Q3
echo "\nQuestion 3:\n";

use App\Stuff\Things\Potato;

$potato = new Potato();
$potato->water()->water();

dump($potato->hasGrown()); // false

$potato->water()->water();
dump($potato->hasGrown()); // false

$potato->water();
dump($potato->hasGrown()); // true

$potato->water()->water();
dump($potato->hasGrown()); // true
