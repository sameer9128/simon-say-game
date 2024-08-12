let gameSeq=[];
let userSeq=[];
let started=false;
let level=0;
let btns=["red","green","yellow","purple"];
let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(started==false)
        console.log("game is started")
    started=true;
    levelUp();
})
function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },250)
}
function checkAns(idx){
    
    if(gameSeq[idx]==userSeq[idx]){
        if(userSeq.length===gameSeq.length){
            setTimeout(levelUp,1000)
        }

        // console.log("same color");
    }
    else{
        h2.innerHTML=`game over! your score was <b>${level} </b> <br> press any key to start`;
        document.querySelector("body").style.backgrounColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white"

        },200)
        reset();
    }
}
function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`level ${level}`;
    let randIndex=Math.floor(Math.random()*3);
    let randColor=btns[randIndex];
    let randBtn=document.querySelector(`.${randColor}`)
    gameSeq.push(randColor);
    console.log(gameSeq)
    btnFlash(randBtn);

}
function btnPress(){
    // console.log("btn was pressed")
    let btn=this;
    btnFlash(btn);
    userColor=btn.getAttribute("id");
    console.log(userColor)
    userSeq.push(userColor)
    checkAns(userSeq.length-1);
}
let allBtns=document.querySelectorAll(".btn")
for(btn of allBtns){
    btn.addEventListener("click",btnPress)
}
function reset(){
    started=false;
    userSeq=[];
    gameSeq=[];
    level=0;

}