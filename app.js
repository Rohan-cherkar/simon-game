let h3=document.querySelector("h3");

let btns=["red","green","yellow","purple"]
let gameSeq=[];
let userSeq=[];

let started=false;
let level=0;


document.addEventListener("keypress", function () {
    if(started==false){
        started=true;
        // console.log(started)
        levUp()
    } 
});


function flashBtn(btn){
    btn.classList.add("flash");
    setTimeout(function (){
        btn.classList.remove("flash");
    },500)
    
}
function userflash(btn){
    btn.classList.add("userflash")
        setTimeout(function() {
            btn.classList.remove("userflash");
        },500);
        
};
function levUp (){
    level++;
    h3.innerText=`level ${level}`;
    let randIdx=Math.floor(Math.random() * 4);
    // console.log(randIdx);
    let randCol=btns[randIdx];
    let randBtn=document.querySelector(`.${randCol}`);

    flashBtn(randBtn);
    gameSeq.push(randCol);
    userSeq=[];
    
}


function check(idx){
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levUp,1000)
        }
    }else{
        document.body.style.backgroundColor="red";
        setTimeout(function (){
            document.body.style.backgroundColor="white";
        },150)
        h3.innerHTML=`Game Over !!! <u> Your score was ${level} </u> <br>Click anythinng to play again `
        // gameSeq=[];
        // started=false;

        reset()
    }

}
function btnPress() {
    let btn= this;
    userflash(btn);
    let userCol=btn.getAttribute("id");
    // let randBtn=document.querySelector(`.${userCol}`)
    // console.log(randBtn)
    userSeq.push(userCol);
    check(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for (btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}