const assert = require('assert');
const Rat = require('../rat.js');
const Food = require('../food.js');

describe('Rat', function () {
  let rat;
  let food;

  beforeEach(function () {
    rat = new Rat();
    food = new Food('pizza', 50);
  });

  it('should be able to poison food', function () {
    rat.poisonFood(food);
    assert.strictEqual(food.isPoisoned, true);
  });

});
