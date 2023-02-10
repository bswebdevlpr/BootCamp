let isAdult = true
let isVIP = false
let isDrunken = true
let isPaid = true

if((isAdult || isVIP || isPaid) && !isDrunken ){
  console.log("passed")
} else {
  console.log("kicked")
}