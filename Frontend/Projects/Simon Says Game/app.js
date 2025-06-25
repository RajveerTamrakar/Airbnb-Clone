let gameSeq = [];
let userSeq = [];
let btns = ["box1", "box2", "box3", "box4"];
let start = false;
let level = 0;

let p = document.querySelector("p");
document.addEventListener("keypress", function () {
    if (start == false) {
        console.log(`Level 1`);
        start = true;
    }
    levelUp();
})

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout (function() {
        btn.classList.remove("flash")
    },100);
}

function levelUp() {
    level++;
    p.innerText = `Level ${level}`
    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randBtn);
}
function btnPress() {
let btn=this;
btnFlash(btn);
let userColor=btn.getAttribute("id");
console.log(userColor);
}

let allBtns=document.querySelectorAll(".boxes");
for (btn of allBtns) {
    btn.addEventListener("click",btnPress);
}
