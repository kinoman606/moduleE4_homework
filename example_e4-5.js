// E4. Задание 5
class ElectricalDevice {
  constructor (name, power) {
    this.name = name;
    this.power = power;
    this.isOn = false;
  }

  setOn() {
    if (!this.isOn) {
      this.isOn = true;
    } else {
      console.log(`${this.name} is already is on`)
    }
  }

  setOff() {
    if (this.isOn) {
      this.isOn = false;
    } else {
      console.log(`${this.name} is already is off`)
    }
  }

  static aggregatePowerConsumption(...devices) {
    let agg = 0;
    for (let device of devices) {
      if (device.isOn) {
        agg += device.power;
      }
    }
    return agg;
  }
}

class KitchenDevice extends ElectricalDevice {
  constructor(name, power, use) {
    super(name);
    this.power = power;
    this.use = use;
  }

  getDescription() {
    console.log(`Description of ${this.name}: this device is intended for use in the kitchen ${this.use}, its power is ${this.power} watts`)
  }
}

class OfficeDevice extends ElectricalDevice{
  constructor(name, power, use) {
    super(name);
    this.power = power;
    this.use = use;
  }

  getDescription() {
    console.log(`Description of ${this.name}: this device is intended for use in the office ${this.use}, its power is ${this.power} watts`)
  }
}

const fridge  = new KitchenDevice('Fridge', 1200, 'for storing food');
const microwaveOven  = new KitchenDevice('Microwave oven', 500, 'for heating food');
const noteBook = new OfficeDevice('Notebook', 300, 'for remote work with computer programs')
const printerColor = new OfficeDevice('Color printer', 900, 'for printing color text/pictures')

fridge.getDescription()
microwaveOven.getDescription()
noteBook.getDescription()
printerColor.getDescription()

console.log(fridge.isOn);
fridge.setOn();
console.log(fridge.isOn);

microwaveOven.setOff();
console.log(microwaveOven.isOn);

noteBook.setOn()
console.log(noteBook.isOn)

console.log(ElectricalDevice.aggregatePowerConsumption(fridge, microwaveOven, noteBook, printerColor))
