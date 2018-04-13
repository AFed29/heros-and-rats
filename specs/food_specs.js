const assert = require('assert');
const Food = require('../food.js');

describe('Food', function () {
  let food;

  beforeEach(function () {
    food = new Food('mexican chicken wrap', 20);
  });

  it('should have a name', function () {
    assert.strictEqual(food.name, 'mexican chicken wrap');
  });

  it('should have a replenishment value', function () {
    assert.strictEqual(food.replenishmentValue, 20);
  });
  
});
