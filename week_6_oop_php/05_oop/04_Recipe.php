<?php

require __DIR__ . "/vendor/autoload.php";

class Recipe
{
    private $name;
    private $ingredients = []; // Investigate collections (declared in the constructor method).
    private $instructions = [];

    public function __construct($name)
    {
        $this->name = $name;
    }

    public function addIngredient(Ingredient $ingredient, string $amount) : Recipe
    {
        // Add an ingredient to the recipe
        array_push($this->ingredients, [
            "ingredient" => $ingredient,
            "amount" => $amount,
        ]);
        return $this;
    }

    public function addInstruction(string $instruction) : Recipe
    {
        // Add an instruction step to the recipe
        array_push($this->instructions, $instruction);
        return $this;
    }

    public function getDietary() : array
    {
        // Return array of dietary restrictions
        $dietaryRestrictions = [];
        foreach ($this->ingredients as $ingredient) {
            $dietaryRestrictions = array_merge($dietaryRestrictions, $ingredient["ingredient"]->getDietaryNotes());
        }
        return $dietaryRestrictions;
    }

    public function displayRecipe() : string
    {
        // Return formatted string of the whole recipe
        return ("{$this->name}\n\nIngredients\n{$this->displayIngredients()}\nMethod\n{$this->displayInstructions()}");
    }

    public function displayIngredients() : string
    {
        // Return formatted string of ingredients
        $string = "";
        foreach ($this->ingredients as $ingredient) {
            $string .= "- {$ingredient["amount"]} {$ingredient["ingredient"]->getName()}\n";
        }
        return $string;
    }

    public function displayInstructions() : string
    {
        // Return formatted string of instructions
        $string = "";
        $counter = 1;
        foreach ($this->instructions as $instruction) {
            $string .= "{$counter}.  {$instruction}\n\n";
            $counter += 1;
        }
        return $string;
    }

    public function displayDietary() : string
    {
        // Return formatted string of dietary restrictions
        return implode(", ", array_unique($this->getDietary()));
    }

    public function vegan() : bool
    {
        // Is the recipe vegan?
        return !in_array("animal produce", $this->getDietary());
    }

}

class Ingredient
{
    private $name;
    private $dietaryNotes = [];
    private $amount;

    public function __construct(string $name, array $dietaryNotes)
    {
        $this->name = $name;
        $this->dietaryNotes = $dietaryNotes;
    }

    public function setAmount(string $amount) : Ingredient
    {
        $this->amount = $amount;
        return $this;
    }

    public function getName() : string
    {
        return $this->name;
    }

    public function getAmount() : string
    {
        return $this->amount;
    }

    public function getDietaryNotes() : array
    {
        return $this->dietaryNotes;
    }

}

// ingredients take a name, followed by an array of dietary notes
$flour = new Ingredient("Flour", ["gluten"]);
$eggs = new Ingredient("Eggs", ["animal produce"]);
$sugar = new Ingredient("Sugar", []);
$butter = new Ingredient("Butter", ["dairy", "animal produce"]);

// a recipe takes a name
$cake = new Recipe("Cake");

// we can add ingredients plus amounts
$cake->addIngredient($flour, "200g");
$cake->addIngredient($butter, "100g");
$cake->addIngredient($sugar, "50g");
$cake->addIngredient($eggs, 2);

// we can add a method
$cake->addInstruction("Put them in a bowl, mix them together, cook for a bit. Job's a good'un");

// we can see the recipe
// using echo so it looks nicer
echo $cake->displayRecipe();
/*
"Cake

Ingredients

- 200g Flour
- 100g Butter
- 50g Sugar
- 2 Eggs

Method

Put them in a bowl, mix them together, cook for a bit. Job's a good'un"
 */

// we can list dietary information
dump($cake->displayDietary()); // "gluten, animal produce, dairy"

// is the recipe vegan? (i.e. contains animal produce)
dump($cake->vegan()); // false
