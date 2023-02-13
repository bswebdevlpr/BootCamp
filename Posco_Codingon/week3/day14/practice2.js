const pororo = {
  name: "뽀로로",
  age: 7
}
console.log(pororo)

pororo['gender'] = 'M'
console.log(pororo)

pororo['height'] = 100
console.log(pororo)

delete pororo['gender']
console.log(pororo)

pororo["getName"] = function () {
  console.log(this.name)
}
pororo.getName()

function showHeight() {
  console.log(this.height)
}
pororo["showHeight"] = showHeight;
pororo.showHeight()