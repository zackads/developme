<?php

require __DIR__ . "/vendor/autoload.php";

function total($items) : float {
    return collect($items)->reduce(fn($total, $item) => $total + $item["price"],0);
};

$shoppingList = [[
    "name" => "coffee",
    "price" => 3.50,
], [
    "name" => "tea",
    "price" => 2.50,
], [
    "name" => "toblerone",
    "price" => 3.20,
], [
    "name" => "newspaper",
    "price" => 0.10,
]];

dump(
    total($shoppingList), // 9.3
);