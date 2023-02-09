const arr = []

let str = `이 글은 도커에 대해 1 도 모르는 시스템 관리자나
서버 개발자를 대상으로 도커 전반에 대해 얕고 넓은
지식을 담고 있습니다. 도커가 등장한 배경과 도커의
역사, 그리고 도커의 핵심 개념인 컨테이너와 이미지에
대해 알아보고 실제로 도커를 설치하고 컨테이너를 실
행해 보도록 하겠습니다.`

let byte = 0 
let tempStr = ""
for(let i=0; i<str.length; i++){
  // console.log("i="+i)
  // console.log(str[i], ":", str[i].charCodeAt())
  if(str[i] === '\n' ||
    (tempStr.length === 0 && str[i] === ' ')) continue

  const c = str[i]
  const ascii = str[i].charCodeAt()
  let cByte

  if(ascii > 127) {
    cByte = 2
  } else {
    cByte = 1
  }
  
  if(byte + cByte === 80) {
    arr.push(tempStr + c) 
    tempStr = ""
    byte = 0
  } else if(byte + cByte > 80) {
    arr.push(tempStr)
    tempStr = ("" + c)
    byte = cByte
  } else {
    tempStr += c
    byte += cByte
  }

  // console.log("byte="+byte)
  // console.log()
} 
arr.push(tempStr)

console.log(arr)