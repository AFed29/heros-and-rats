const assert = require('assert');
const Hero = require('../hero.js');
const Food = require('../food.js');

describe('Hero', function () {
  let hero;
  let food1;
  let food2;

  beforeEach(function () {
    hero = new Hero('Alan', 100, 'peppers panini');
    food1 = new Food('lentil soup', 10);
    food2 = new Food('peppers panini', 20);
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

  it('should have a collection of tasks to complete that starts empty', function functionName() {
    assert.deepStrictEqual(hero.tasks, []);
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


  });
});
