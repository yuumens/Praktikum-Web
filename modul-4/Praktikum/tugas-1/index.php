<?php

function generate($n){
    for ($i = 1; $i <= $n; $i++) {
        if ($i % 3 == 0 && $i % 5 == 0) {
            echo "HelloWorld" . PHP_EOL;
        } elseif ($i % 3 == 0) {
            echo "Hello" . PHP_EOL;
        } elseif ($i % 5 == 0) {
            echo "World" . PHP_EOL;
        } else {
            echo $i . PHP_EOL;
        }
    }
}

generate(15);