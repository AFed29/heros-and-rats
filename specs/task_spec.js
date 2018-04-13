const assert = require('assert');
const Task = require('../task.js');

describe('Task', function () {
  let task;

  beforeEach(function () {
    task = new Task('hard', 'medium', 100)
  })

  it('should have a difficulty level', function () {
    assert.strictEqual(task.difficulty, 'hard');
  });

  it('should have an urgency level', function () {
    assert.strictEqual(task.priority, 'medium');
  });

  it('should have a reward', function () {
    assert.strictEqual(task.reward, 100);
  });

  it('should have a completion status that starts false', function functionName() {
    assert.strictEqual(task.completed, false);
  });

  it('should be able to be marked as complete', function () {
    task.flipCompleted();
    assert.strictEqual(task.completed, true);
  });

});
