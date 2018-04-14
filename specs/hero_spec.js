const assert = require('assert');
const Hero = require('../hero.js');
const Food = require('../food.js');
const Task = require('../task.js');
const Rat = require('../rat.js');

describe('Hero', function () {
  let hero;
  let food1, food2;
  let task1, task2, task3, task4;

  beforeEach(function () {
    hero = new Hero('Alan', 100, 'peppers panini');
    food1 = new Food('lentil soup', 10);
    food2 = new Food('peppers panini', 20);
    task1 = new Task('hard', 'high', 400)
    task2 = new Task('hard', 'medium', 500)
    task3 = new Task('medium', 'medium', 10)
    task4 = new Task('easy', 'low', 500)
  })

  it('should have a name', function () {
    assert.strictEqual(hero.name, 'Alan');
  });

  it('should have health', function () {
    assert.strictEqual(hero.health, 100);
  });

  it('should have a favourite food', function () {
    assert.strictEqual(hero.favouriteFood, 'peppers panini')
  });

  it('should be able to talk and say their name', function () {
    const result = hero.greeting();
    assert.strictEqual(result, 'Greetings, I am Alan!')
  });

  it('should have a collection of tasks to complete that starts empty', function () {
    assert.deepStrictEqual(hero.tasks, []);
  });

  it('should be able to add a task to collection', function () {
    hero.addTask(task1);
    assert.deepStrictEqual(hero.tasks, [task1]);
  });

  it('should be able to complete a task', function () {
    hero.addTask(task1);
    hero.completeTask(task1);
    assert.strictEqual(task1.completed, true);
  });

  describe('Eating', function () {
    it('should be able to eat food to increase health(not favourite food)', function () {
      hero.eat(food1);
      assert.strictEqual(hero.health, 110);
    });

    it('should be able to eat food to increase health(is favourite food)', function () {
      hero.eat(food2);
      assert.strictEqual(hero.health, 130);
    });

    it('should lose health if it eats poisoned food', function () {
      const rat = new Rat();
      rat.poisonFood(food1);
      hero.eat(food1);
      assert.strictEqual(hero.health, 80);
    });

  });

  describe('Task Sorting', function () {

    beforeEach(function () {
      hero.tasks = [];
      hero.addTask(task1);
      hero.addTask(task2);
      hero.addTask(task3);
      hero.addTask(task4);
      hero.completeTask(task2);
      hero.completeTask(task3);
    });

    it('should be able to sort tasks by difficulty', function () {
      hero.sortTasks('difficulty');
      assert.deepStrictEqual(hero.tasks, [task4, task1, task2, task3]);
    });

    it('should be able to sort tasks by priority', function () {
      hero.sortTasks('priority');
      assert.deepStrictEqual(hero.tasks, [task1, task4, task2, task3]);
    });

    it('should be able to sort tasks by reward', function () {
      hero.sortTasks('reward');
      assert.deepStrictEqual(hero.tasks, [task3, task1, task2, task4]);
    });

    it('should be able to display uncompleted tasks', function () {
      const result = hero.showUncompletedTasks();
      assert.deepStrictEqual(result, [task1, task4]);
    });

    it('should be able to display completed tasks', function () {
      const result = hero.showCompletedTasks();
      assert.deepStrictEqual(result, [task2, task3]);
    });

  });

});
