const base_line = 5
const height = 2
const radius = 5

function get_area_triangle(base_line, height){
  return base_line * height / 2
}

function get_area_circle(radius){
  return radius * radius * 3.14
}

function get_hypotenuse(base_line, height){
  return Math.sqrt(base_line**2 + height**2)
}

const result1 = get_area_triangle(base_line, height)
const result2 = get_area_circle(radius)
const result3 = get_hypotenuse(base_line, height)

console.log("삼각형 넓이:", result1)
console.log("원 넓이:", result2)
console.log("빗변의 길이:", result3)