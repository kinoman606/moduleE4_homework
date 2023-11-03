// E4. Задание 4
function ElectricalDevice(name, power) {
  this.name = name;
  this.power = power;
  this.isOn = false;
}

ElectricalDevice.prototype.setOn = function() {
  if (!this.isOn) {
    this.isOn = true;
  } else {
    console.log(`${this.name} is already is on`)
  }
}

ElectricalDevice.prototype.setOff = function() {
  if (this.isOn) {
    this.isOn = false;
  } else {
    console.log(`${this.name} is already is off`)
  }
}

function KitchenDevice(name, power, use) {
  this.name = name;
  this.power = power;
  this.use = use;
  this.getDescription = function () {
    console.log(`Description of ${name}: this device is intended for use in the kitchen ${use}, its power is ${power} watts`)
  }
}

function OfficeDevice(name, power, use) {
  this.name = name;
  this.power = power;
  this.use = use;
  this.getDescription = function () {
    console.log(`Description of ${name}: this device is intended for use in the office ${use}, its power is ${power} watts`)
  }
}

KitchenDevice.prototype = new ElectricalDevice();
OfficeDevice.prototype = new ElectricalDevice();

function aggregatePowerConsumption(...devices) {
  let agg = 0;
  for (let device of devices) {
    if (device.isOn) {
      agg += device.power;
    }
  }
  return agg;
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

console.log(aggregatePowerConsumption(fridge, microwaveOven, noteBook, printerColor))
