let userScore=0;
let compscore=0;
let name=prompt("Enter Your Name:");
let nameId=document.querySelector('#name');
nameId.innerText=name;

const choices=document.querySelectorAll('.choice');
let msg=document.querySelector('#msg');
let us=document.querySelector('#user-score');
let cs=document.querySelector('#computer-score')

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
});

//computer turn
function compTurn(){
    let choices=['rock','paper','scissor'];
    let random=Math.floor(Math.random()*3);
    return choices[random];
}

const playGame=(userChoice)=>{
    console.log("user Choice ",userChoice);
    //generate computer choice
    const compChoice=compTurn();
    console.log("Comp Choice ",compChoice);

    if(userChoice===compChoice){
        draw();
    }
    else{
        let userWin=true;
        if(userChoice==='rock'){
            //paper,scissor
            userWin=compChoice==='paper'?false:true;
        }
        else if(userChoice==='paper'){
            //rock,scissor
            userWin=compChoice==='scissor'?false:true;
        }
        else{
            //rock,paper
            userWin=compChoice==='rock'?true:false;
        }
        showWinner(userWin,userChoice,compChoice)
    }
}
function draw(){
    console.log("draw");
    msg.innerText="The game is Draw! Try Again";
    msg.style.backgroundColor='rgb(5,25,68)';
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        console.log("you won");
        msg.innerText=`you Win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor='Green'
        userScore++;
        us.innerText=userScore;
    } else{
        console.log("you loose");
        msg.innerText=`you loose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor='red';
        compscore++;
        cs.innerText=compscore;
    }
};

