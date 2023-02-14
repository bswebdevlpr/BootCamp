const orange = document.querySelector(".orange")
const skyblue = document.querySelector("#skyblue")
const child = document.querySelector("ul>li:nth-child(2)")

console.log(orange)
console.log(skyblue)
console.log(child)

child.classList.add('orange')
console.log()
console.log("After add:")
console.log(child)
console.log()

if(orange.classList.contains('orange')) {
  orange.classList.remove('orange')
}
console.log(orange)