const Task = function (difficulty, priority, reward) {
  this.difficulty = difficulty;
  this.priority = priority;
  this.reward = reward;
  this.completed = false;
};

Task.prototype.flipCompleted = function () {
  this.completed = !this.completed;
};

module.exports = Task;
