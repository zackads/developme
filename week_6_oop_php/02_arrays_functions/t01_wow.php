<?php

require __DIR__ . "/vendor/autoload.php";

function wow($n) {
    return "W" . str_repeat("o", $n) . "w";
}

// Using pluck
function total($items){
    return collect($items)->pluck("price")->sum();
 };

dump(wow(12)); // "Woooooooooooow"
dump(wow(4)); // "Woooow"