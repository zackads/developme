<?php

require __DIR__ . "/vendor/autoload.php";

/*
/   Using foreach
*/

// function squares($arr) {
//     $squares = [];

//     foreach ($arr as $value) {
//         array_push($squares, $value * $value);
//     }
//     return $squares;
// }

// dump(
//     squares([2, 3, 4]), // [4, 9, 16]
//     squares([2, 3, 4, 5, 6]), // [4, 9, 16, 25, 36]
// );

/*
/   Using collect()
*/

function squares($nums) {
    return collect($nums)->map(fn($num) => pow($num, 2))->all();
}

dump(
    squares([2, 3, 4]), // [4, 9, 16]
    squares([2, 3, 4, 5, 6]), // [4, 9, 16, 25, 36]
);