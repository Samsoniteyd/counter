const decrease = document.querySelector('#de')
const reset = document.querySelector('#re')
const increase = document.querySelector('#in')
const putIn = document.querySelector(".put")


let count = 0;
increase.addEventListener('click', countFront)
function countFront(e){
  
  count += 1
  
  
  putIn.innerHTML = count;
 putIn.style.color="green"
 

  console.log(count)
  
  e.preventDefault()
};

reset.addEventListener('click', rest)
function rest(e){
  count = 0

  
  putIn.innerHTML = count;

  putIn.style.color="black"
  console.log(count)
  
  e.preventDefault()
};

decrease.addEventListener('click', countBack)
function countBack(e){
  count -= 1

  
  putIn.innerHTML = count;

  putIn.style.color="red"
  console.log(count)
  
  e.preventDefault()
};