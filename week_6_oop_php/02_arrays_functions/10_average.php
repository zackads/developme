<?php

require __DIR__ . "/vendor/autoload.php";

function average($nums) {
    return (collect($nums)->reduce(fn($sum, $cur) => $sum + $cur, 0) / count($nums));
}

dump(
    average([2, 3, 4, 5, 6]), // 4
    average([2, 3]), // 2.5
    average([10, 30]), // 20
    average([-4, -8, -9]), // -7
);