const Hero = function (name, health, favouriteFood) {
  this.name = name;
  this.health = health;
  this.favouriteFood = favouriteFood;
  this.tasks = [];
};

Hero.prototype.greeting = function () {
  return `Greetings, I am ${ this.name }!`
};

module.exports = Hero;
