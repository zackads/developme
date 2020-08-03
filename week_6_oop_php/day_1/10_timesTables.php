<?php

require __DIR__ . "/vendor/autoload.php";

for ($row = 1; $row <= 15; $row += 1) { 
    for ($col = 1; $col <= 15; $col += 1) { 
        echo(($col * $row) . "\t");
    }
    echo("\n");
}