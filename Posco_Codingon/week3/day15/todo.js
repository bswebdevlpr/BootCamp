const addBtn = document.querySelector(".btn--add")
const inputTask = document.querySelector(".input-task")
const todoList = document.querySelector(".todo-list")

addBtn.addEventListener("click", (event) => {
  const check = document.createElement('input')
  check.setAttribute("type", "checkbox")
  check.addEventListener('change', function() {
      if(this.checked) 
        this.parentNode.style.textDecoration = "line-through"
      else
        this.parentNode.style.textDecoration = "none"
  })

  const newNode = document.createElement('li')
  newNode.innerText += `${inputTask.value}`

  const deleteBtn = document.createElement('button')
  deleteBtn.innerText = '삭제'
  deleteBtn.addEventListener('click', function(e) {
    this.parentNode.parentNode.removeChild(this.parentNode)
  })

  newNode.prepend(check)
  newNode.append(deleteBtn)

  todoList.append(newNode)
})
