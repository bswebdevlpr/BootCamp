function this_func(){
  console.log(this)
}

const obj = {
  this_func
}

obj.this_func()
console.log("\n\n\n")
this_func()