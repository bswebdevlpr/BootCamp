const date = new Date().getDay()
let dateStr = ""

if(date === 0){
  dateStr += "일요일"
} else if(date === 1){
  dateStr += "월요일"
} else if(date === 2){
  dateStr += "화요일"
} else if(date === 3){
  dateStr += "수요일"
} else if(date === 4){
  dateStr += "목요일"
} else if(date === 5){
  dateStr += "금요일"
} else if(date === 6){
  dateStr += "토요일"
}

alert(dateStr)