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
  if (food.isPoisoned) {
    this.health -= 20;
  } else {
    if (food.name === this.favouriteFood) {
      this.health += (food.replenishmentValue * 1.5)
    } else {
      this.health += food.replenishmentValue;
    }
  }
};

Hero.prototype.addTask = function (task) {
  this.tasks.push(task);
};

Hero.prototype.completeTask = function (taskToComplete) {
  this.tasks.forEach(function (task) {
    if (task === taskToComplete) {
      task.flipCompleted();
    }
  })
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

Hero.prototype.showUncompletedTasks = function () {
  return this.tasks.filter((task) => task.completed === false);
};

Hero.prototype.showCompletedTasks = function () {
  return this.tasks.filter((task) => task.completed === true);
};

module.exports = Hero;
