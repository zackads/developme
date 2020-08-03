<?php

require __DIR__ . "/vendor/autoload.php";

function isIn($value, $arr) {
    return collect($arr)->reduce(fn($flag, $item) => $item === $value || $flag, false);
}

dump(
    isIn(2, [1, 2, 5, 6]), // true
    isIn(3, [1, 2, 5, 6]), // false
    isIn(4, [1, 2, 5, 6]), // false
    isIn(5, [1, 2, 5, 6]), // true
    isIn(6, [1, 2, 5, 6]), // true
);

function both($arr1, $arr2) {
    return collect($arr1)->filter(fn($item) => isIn($item, $arr2))->all();   
}

dump(
    both([2, 3, 4, 5, 6], [1, 2, 5, 6]), // [2, 5, 6]
);