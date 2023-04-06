'use strict';

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

console.log(bmw, mercedes);

bmw.brake();
mercedes.accelerate();
bmw.brake();
mercedes.accelerate();
mercedes.accelerate();
mercedes.brake();
bmw.accelerate();

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }

  get speedUs() {
    const speedUs = this.speed / 1.6;
    console.log(`${this.make} is going at ${speedUs} mi/h`);
    return speedUs;
  }

  set speedUs(speed) {
    this.speed = speed * 1.6;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }
}

const ford = new CarCl('Ford', 120);
ford.accelerate();
ford.brake();
ford.speedUs = 55;
console.log(ford.speedUs);
ford.accelerate();
ford.brake();
console.log(ford.speedUs);

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
  console.log(`${this.make} now charged to ${this.charge}%`);
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(`${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}%`);
};

const tesla = new EV('Tesla', 120, 23);

tesla.accelerate();
tesla.chargeBattery(90);
tesla.brake();

class EVCl extends CarCl {
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    console.log(`${this.make} now charged to ${this.#charge}%`);
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(`${this.make} is going at ${this.speed} km/h, with a charge of ${this.#charge}%`);
    return this;
  }
}

const rivian = new EVCl('Rivian', 120, 23);

rivian.accelerate().accelerate().brake().chargeBattery(90);
