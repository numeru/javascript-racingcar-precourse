class Controller {
  view;

  model;

  constructor(view, model) {
    this.view = view;
    this.model = model;

    this.bindCarNameInputHandler();
    this.bindCarNameSubmitHandler();
    this.bindRacingCountInputHandler();
    this.bindRacingCountSubmitHandler();
  }

  bindCarNameInputHandler() {
    const inputElement = this.view.getCarNameInputElem();
    inputElement.addEventListener('change', (event) => {
      this.model.setCarNames(event.target.value);
    });
  }

  bindCarNameSubmitHandler() {
    const buttonElement = this.view.getCarNameSubmitButtonElem();
    buttonElement.addEventListener('click', (event) => {
      event.preventDefault();

      const carNamesArr = this.model.getCarNames().split(',');

      this.checkCarNames(carNamesArr);

      this.model.setCars(carNamesArr);
    });
  }

  checkCarNames(carNamesArr) {
    carNamesArr.forEach((name) => {
      if (name.length === 0) {
        this.model.setCarNames('');
        return alert('자동차의 이름을 한글자 이상 입력해주세요.');
      }

      if (name.length > 5) {
        this.model.setCarNames('');
        return alert('자동차의 이름은 5글자 이하만 가능합니다.');
      }
    });
  }

  bindRacingCountInputHandler() {
    const inputElement = this.view.getRacingCountInputElem();
    inputElement.addEventListener('change', (event) => {
      this.model.setRound(event.target.value);
    });
  }

  bindRacingCountSubmitHandler() {
    const buttonElement = this.view.getRacingCountSubmitButtonElem();
    buttonElement.addEventListener('click', (event) => {
      event.preventDefault();

      if (this.model.getCars().length === 0) {
        return alert('자동차의 이름을 먼저 입력해주세요.');
      }

      const round = this.model.getRound();
      if (round <= 0) {
        return alert('시도할 횟수는 0보다 커야합니다.');
      }

      this.playGame(round);
    });
  }

  playGame(round) {
    const cars = this.model.getCars();

    for (let i = 0; i < round; i++) {
      const result = {};
      cars.forEach((car) => {
        car.moveOrNot();

        result[car.name] = car.distance;
      });

      this.model.setResults(result);
    }

    this.decideWinner();

    this.view.showGameResult();
  }

  decideWinner() {
    const finalRoundCars =
      this.model.getResults()[this.model.getResults().length - 1];

    const finalRoundDistance = finalRoundCars.map((result) => result[1]);

    const maxDistance = Math.max(...finalRoundDistance);

    const winners = finalRoundCars
      .filter((car) => car[1] === maxDistance)
      .map((winnerCar) => winnerCar[0]);

    this.model.setWinners(winners);
  }
}

export default Controller;
