<?php

require __DIR__ . "/vendor/autoload.php";

function wow($n) {
    return "W" . str_repeat("o", $n) . "w";
}

dump("oO0");
dump(wow(12)); // "Woooooooooooow"
dump(wow(4)); // "Woooow"