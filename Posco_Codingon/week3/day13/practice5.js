let i = 2;
let j = 1;

while(i <= 9) {
  while(j <= 9){
    console.log(`${i} * ${j} = ${i*j}`)
    j++
  }
  console.log('\n')
  i++
  j = 1
}