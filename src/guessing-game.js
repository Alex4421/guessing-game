module.exports = class GuessingGame {
    constructor(max) {
      this.min = 0;
      this.max = max;
    }
  
    guess() {
      if (this.max < this.min) {
        throw new Error("Неверный диапазон");
      }
      return Math.floor((this.min + this.max) / 2);
    }
  
    lower(guess) {
      if (guess < this.min || guess > this.max) {
        throw new Error("Угадывание вне диапазона");
      }
      this.max = guess - 1;
    }
  
    greater(guess) {
      if (guess < this.min || guess > this.max) {
        throw new Error("Угадывание вне диапазона");
      }
      this.min = guess + 1;
    }
  }
  
  const game = new (require('./GuessingGame'))(6118);
  while (true) {
    const guess = game.guess();
    console.log(`Угадывание: ${guess}`);
    if (guess === 998) {
      break;
    } else if (guess < 998) {
      game.greater(guess);
    } else {
      game.lower(guess);
    }
  }
  