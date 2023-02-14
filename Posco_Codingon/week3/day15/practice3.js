const box1 = document.querySelector(".box1")
const box2 = document.querySelector(".box2")

box1.onclick = function () {
  if(!box1.classList.contains('orange')) {
    if(box1.classList.contains('skyblue'))
      box1.classList.remove('skyblue')
    box1.classList.add('orange')
  } else {
    box1.classList.remove('orange')
    box1.classList.add('skyblue')
  }
}

box2.addEventListener("click", function () {
  if(!box2.classList.contains('orange')) {
    if(box2.classList.contains('skyblue'))
      box2.classList.remove('skyblue')
    box2.classList.add('orange')
  } else {
    box2.classList.remove('orange')
    box2.classList.add('skyblue')
  }
})