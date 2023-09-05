const scoreEl = document.getElementById('score')
const inputEl = document.getElementById('input')
const formEl = document.getElementById('form')
const questionEl = document.getElementById('questions')

const num1 = Math.ceil(Math.random()*10)
const num2 = Math.ceil(Math.random()*10)


let score = JSON.parse(localStorage.getItem("score"))


if(!score){
    score=0
}


scoreEl.innerText=`Score:${score}`

console.log(scoreEl)
// console.log(num1,num2)

questionEl.innerText=`What is ${num1} mutiply by ${num2} ?`;

const ans = num1*num2

formEl.addEventListener('submit',()=>{
    const Userans =+ inputEl.value;
    // console.log(typeof Userans)
    if(ans == Userans){
        score++;
        UpadteLocalStorage()
    }
    else{
        score--
        UpadteLocalStorage()
    }
})

function UpadteLocalStorage(){
    localStorage.setItem('score',JSON.stringify(score))
}