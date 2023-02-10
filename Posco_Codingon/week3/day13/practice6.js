let sum = 0

for(let i=1; i<1001; i++){
  if(i % 2 !== 0) continue
  else sum += i
}

console.log(sum)