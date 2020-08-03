<?php

require __DIR__ . "/vendor/autoload.php";

function sum($nums) {
    return (collect($nums)->reduce(fn($sum, $cur) => $sum + $cur));
}

function sumBoth($nums1, $nums2) {
    return sum($nums1) + sum($nums2);
}  

dump(
    sumBoth([2, 3, 4, 5, 6], [1, 2, 3, 4]), // 30
    sumBoth([2, 3, 4, 5, 6], [5, 10, 12]), // 47
);