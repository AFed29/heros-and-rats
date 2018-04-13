const assert = require('assert');
const Hero = require('../hero.js');

describe('Hero', function () {
  let hero;

  beforeEach(function () {
    hero = new Hero('Alan', 100, 'peppers panini')
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
  
});
