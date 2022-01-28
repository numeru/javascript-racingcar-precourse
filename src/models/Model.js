import Car from './Car.js';

class Model {
  carNames;
  round;
  cars;
  winners;
  results;

  constructor() {
    this.carNames = '';
    this.round = 0;
    this.cars = [];
    this.winners = [];
    this.results = [];
  }

  getCarNames() {
    return this.carNames;
  }

  getRound() {
    return this.round;
  }

  getCars() {
    return this.cars;
  }

  getResults() {
    return this.results;
  }

  getWinners() {
    return this.winners;
  }

  setCarNames(carNames) {
    this.carNames = carNames;
  }
  setRound(round) {
    this.round = round;
  }

  setCars(carNames) {
    carNames.forEach((name) => {
      this.cars.push(new Car(name));
    });
  }

  setResults(result) {
    const resultArr = Object.entries(result);

    this.results.push(resultArr);
  }

  setWinners(winners) {
    this.winners = winners;
  }
}

export default Model;
