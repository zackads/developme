<?php

require __DIR__ . "/vendor/autoload.php";

function double($nums) {
    return collect($nums)->map(fn($num) => $num * 2)->all();
}

dump(
    double([2, 3, 4, 5, 6]), // [4, 6, 8, 10, 12]
    double([1, 2, 5]), // [2, 4, 10]
);