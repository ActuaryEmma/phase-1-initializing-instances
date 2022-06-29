// Write your code here
class Dog {
    constructor(name, breed){
        this.name = name;
        this.breed = breed;
    }
}
let bigDog1 = new Dog("David", "German");
let bigDog2 = new Dog("Luke", "labrodor");

console.log(bigDog1);
console.log(bigDog2);

//BreakFast
class Breakfast {
    constructor(food, drink){
        this.food = food;
        this.drink = drink;
    }
}
let breakfast1 = new Breakfast("egg", "Juice")
console.log(breakfast1)


//Lunch
class Lunch {
    constructor(salad, soup, drink){
        this.soup = soup;
        this.drink = drink;
        this.salad = salad
    }
}
let lunch1 = new Lunch("Veg", "Fish", "Juice")
console.log(lunch1)


//Dinner
class Dinner {
    #dessert;
    constructor(salad, soup, entree, dessert){
        this.salad = salad
        this.soup = soup;
        this.entree = entree;
        this.#dessert = dessert;
    }
}
let dinner1 = new Dinner("Veg", "Mushroom", "Meat", "Cake")
console.log(dinner1);