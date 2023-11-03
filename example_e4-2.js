// E4. Задание 2
function isHasProperty(str, object) {
  return console.log(str in object);
}

const obj = {prop1: 1, prop2: 2, prop3: 3}
isHasProperty('prop1', obj)
