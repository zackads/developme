<?php

require __DIR__ . "/vendor/autoload.php";

class Validator
{
    static function email(string $email) : bool
    {
        return boolval(filter_var($email, FILTER_VALIDATE_EMAIL));
    }

    static function postcodeValid(string $postcode) : bool
    {
        $postcode_re = "/^[A-Z]{1,2}[0-9]{1,2}[A-Z]?\s[0-9][A-Z]{2}$/";
        return (preg_match($postcode_re, $postcode) === 1);
    }

    static function postcodeExists(string $postcode) : bool
    {
        if ($this->postcodeValid($postcode)) {
            return boolval(@file_get_contents("http://api.postcodes.io/postcodes/{$postcode}"));
        } else {
            return false;
        }
    }
}

$validator = new Validator();

// it validates email addresses
echo "Email\n";
dump($validator->email("alfonso@example.com")); // true
dump($validator->email("wombat+12@spoons.plumbing")); // true
dump($validator->email("blah blah blah! alfonso@example.com")); // false
dump($validator->email("wombat@spoonsplumbing")); // false
dump($validator->email("wombatspoons")); // false
dump($validator->email("@wombatspoons")); // false

// it validates email addresses with random data
$faker = Faker\Factory::create();

echo "\nEmail (using Faker data)\n";
$testsToComplete = 100;
$testsFailed = 0;
for ($i = 1; $i <= $testsToComplete; $i += 1) {
    $testEmail = $faker->email;
    if ($validator->email($testEmail) === false) {
        dump("Test {$i} failed: \"assert $validator->email({$testEmail}) === true\".  Returned false.");
    }
}
dump("{$testsToComplete} tests with Faker data complete: {$testsFailed} failed.");



// it validates postcodes
echo "\nPostcode\n";
dump($validator->postcodeValid("BS4 3UH")); // true
dump($validator->postcodeValid("S10 4GR")); // true
dump($validator->postcodeValid("BS14 9DI")); // true
dump($validator->postcodeValid("SW1A 1AA")); // true
dump($validator->postcodeValid("12B DI9")); // false
dump($validator->postcodeValid("EST4 DD29")); // false
dump($validator->postcodeValid("blah blah BS5 8RJ blah blah")); // false

// it checks if postcodes exist
echo "\nPostcode\n";
dump($validator->postcodeExists("BS4 3UH")); // false
dump($validator->postcodeExists("S10 4GR")); // true
dump($validator->postcodeExists("BS14 9DI")); // false
dump($validator->postcodeExists("SW1A 1AA")); // true
dump($validator->postcodeExists("12B DI9")); // false
dump($validator->postcodeExists("EST4 DD29")); // false
dump($validator->postcodeExists("blah blah BS5 8RJ blah blah")); // false
