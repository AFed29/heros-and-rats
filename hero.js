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

Hero.prototype.addTask = function (task) {
  this.tasks.push(task);
};

Hero.prototype.sortTasks = function (sortBy) {
  this.tasks.sort(function (a, b) {
    let valueA = a[sortBy];
    let valueB = b[sortBy];

    if (sortBy === 'reward') {
      return valueA - valueB;
    } else {
      if (valueA < valueB) {
        return -1;
      }
      if (valueA > valueB) {
        return 1;
      }
      return 0;
    }
  })
};

module.exports = Hero;
