const Hero = function (name, health, favouriteFood) {
  this.name = name;
  this.health = health;
  this.favouriteFood = favouriteFood;
  this.tasks = [];
};

Hero.prototype.greeting = function () {
  return `Greetings, I am ${ this.name }!`
};

Hero.prototype.eat = function (food) {
  if (food.name === this.favouriteFood) {
    this.health += (food.replenishmentValue * 1.5)
  } else {
    this.health += food.replenishmentValue;
  }
};

module.exports = Hero;
