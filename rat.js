const Rat = function () {
}

Rat.prototype.poisonFood = function (food) {
  food.poison();
};

module.exports = Rat;
