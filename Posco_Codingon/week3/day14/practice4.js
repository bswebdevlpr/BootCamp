class Shape {
  constructor(width, height){
    this.width = width
    this.height = height
  }

  getArea() {
    return this.width * this.height
  }
}

class Rectangle extends Shape {
  constructor(width, height){
    super(width, height)
  }

  getArea() {
    return this.width * this.height
  }
}

class Triangle extends Shape {
  constructor(width, height) {
    super(width, height)
  }

  getArea() {
    return this.width * this.height / 2
  }
}

class Circle extends Shape {
  constructor(radius){
    super()
    this.radius = radius
  }

  getArea(){
    return this.radius**2 * 3.14
  }
}

let rect = new Rectangle(5, 5)
let triangle = new Triangle(5, 5)
let circle = new Circle(5)

console.log(rect.getArea())
console.log(triangle.getArea())
console.log(circle.getArea())