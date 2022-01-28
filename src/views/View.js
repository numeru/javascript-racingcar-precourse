class View {
  model;
  appElement;
  carNameInputElem;
  carNameSubmitButtonElem;

  racingCountInputElem;
  racingCountSubmitButtonElem;

  constructor(model) {
    this.model = model;
    this.appElement = document.querySelector('#app');
    this.carNameInputElem = document.querySelector('#car-names-input');
    this.carNameSubmitButtonElem = document.querySelector('#car-names-submit');
    this.racingCountInputElem = document.querySelector('#racing-count-input');
    this.racingCountSubmitButtonElem = document.querySelector(
      '#racing-count-submit'
    );
  }

  getCarNameInputElem() {
    return this.carNameInputElem;
  }
  getCarNameSubmitButtonElem() {
    return this.carNameSubmitButtonElem;
  }
  getRacingCountInputElem() {
    return this.racingCountInputElem;
  }
  getRacingCountSubmitButtonElem() {
    return this.racingCountSubmitButtonElem;
  }

  printWinnerNames() {
    const winners = this.model.getWinners();

    return winners.join(',');
  }

  printRoundResultsOfCar(resultOfCar) {
    const distance = '-'.repeat(resultOfCar[1]);

    return `${resultOfCar[0]}: ${distance}`;
  }

  printRoundResult(roundResult) {
    return `
      <ul>
        ${roundResult.map(
          (result) => `<li>${this.printRoundResultsOfCar(result)}</li>`
        )}
      </ul>
      <br />
    `.replace(/\,/g, '');
  }

  showGameResult() {
    const allRoundResults = this.model.getResults();

    const template = document.createElement('template');
    const roundResultHtml = `
      <div>
        <ul>
        ${allRoundResults.map((roundResult) =>
          this.printRoundResult(roundResult)
        )}
        </ul>
    `.replace(/\,/g, '');

    template.innerHTML = roundResultHtml.concat(`
        최종 우승자: <span id="racing-winners">${this.printWinnerNames()}</span>
      </div>
    `);

    this.appElement.insertAdjacentElement(
      'beforeend',
      template.content.firstElementChild
    );
  }
}

export default View;
