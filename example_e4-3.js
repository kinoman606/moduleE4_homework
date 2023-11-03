// E4. Задание 3
function setWithoutPrototype() {
  const createObj = Object.create(null);
  return createObj;
}

let obj = new setWithoutPrototype()
console.log(obj)
