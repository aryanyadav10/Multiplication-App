const num1 = Math.ceil(Math.random()*20);
const num2 = Math.ceil(Math.random()*20);
const ans = num1 * num2;

const qE = document.getElementById("q");
qE.innerText = `What is ${num1} * ${num2}?`;

const formEl = document.getElementById("form");
const inputEl = document.getElementById("input");
const scoreEl = document.getElementById("score");

let score = JSON.parse(localStorage.getItem("score"));
if(!score) {
    score = 0;
}
scoreEl.innerText = `Score: ${score}`;
formEl.addEventListener("submit",()=> {
    const userAns = +inputEl.value;
    if(userAns === ans){
        score++;
        updateLocalStorage();
    }
    else{
        score--;
        updateLocalStorage();
    }
});

function updateLocalStorage() {
    localStorage.setItem("score",JSON.stringify(score));
}