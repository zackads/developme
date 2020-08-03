<?php

require __DIR__ . "/vendor/autoload.php";

$counter = 1;
$num = 1;
$sum = 0;
while ($counter <= 117) {
    if ($num % 3 === 0 || $num % 7 === 0) {
        $sum += $num;
        $counter += 1;
    }
    $num += 1;
}

dump($sum);
