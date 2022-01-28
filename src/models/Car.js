class Car {
  name;
  distance;

  constructor(name) {
    this.name = name;
    this.distance = 0;
  }

  moveOrNot() {
    const randomNum = MissionUtils.Random.pickNumberInRange(0, 9);

    if (randomNum >= 4) {
      this.distance += 1;
    }
  }
}

export default Car;
