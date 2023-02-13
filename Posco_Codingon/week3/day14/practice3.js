function Kdt(name, gender) {
  this.name = name
  this.gender = gender
  this.printAll = function () {
    console.log("name:", this.name)
    console.log("gender:", gender)
    console.log()
  }
}

const p1 = new Kdt("조성희", "F")
const p2 = new Kdt("양재연", "M")
const p3 = new Kdt("김계환", "M")
const p4 = new Kdt("김범석", "M")
const p5 = new Kdt("김정혁", "M")

p1.printAll()
p2.printAll()
p3.printAll()
p4.printAll()
p5.printAll()