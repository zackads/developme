<?php

require __DIR__ . "/vendor/autoload.php";

function hasNumber($str) {
    // Return true if given string contains a digit
    return preg_match("/[0-9]/", $str) === 1;
}

dump(hasNumber("blah")); // false
dump(hasNumber("bl3h")); // true
dump(hasNumber("bl3h5")); // true