// E4. Задание 1
function getOwnKeysAndProp(object) {
  for (let value in object) {
    if (object.hasOwnProperty(value)) {
      console.log(`Property ${value} contains the value ${object[value]}`)
    }
  }
}

const obj = {prop1: 1, prop2: 2, prop3: 3}
getOwnKeysAndProp(obj)
