<?php

require __DIR__ . "/vendor/autoload.php";

class Basket
{
    private $items = [];

    public function add($basketItem)
    {
        array_push($this->items, $basketItem);
        return $this;
    }

    public function itemNames()
    {
        $itemNames = [];
        foreach ($this->items as $item) {
            array_push($itemNames, $item->name());
        }
        return $itemNames;
    }

    public function total()
    {
        $total = 0;
        foreach ($this->items as $item) {
            $total += $item->price();
        }
        return "£" . number_format($total, 2);
    }
}

class BasketItem
{
    private $name;
    private $price;

    public function __construct($name, $price)
    {
        $this->name = $name;
        $this->price = $price;
    }

    public function name()
    {
        return $this->name;
    }

    public function price()
    {
        return $this->price;
    }
}

$basket = new Basket();

$item1 = new BasketItem("coffee", 3.50);
$item2 = new BasketItem("tea", 2.50);

$basket->add($item1);
$basket->add($item2);

dump($basket->total()); // £6.00
dump($basket->itemNames()); // ["coffee","tea"]
