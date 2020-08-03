<?php

require __DIR__ . "/vendor/autoload.php";

$string1 = "I";
$string2 = "like";
$string3 = "to";
$string4 = "boogie";
$string5 = "boogie";

$concatenated = $string1 . " " . $string2 . " " . $string3 . " " . $string4 . " " . $string5;
dump($concatenated); // "I like to boogie boogie"

$interpolated = "{$string1} {$string2} {$string3} {$string4} {$string5}";
dump($interpolated); // "I like to boogie boogie"