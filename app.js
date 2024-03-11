console.log("Hello")

let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const message=document.querySelector("#msg");

const userpara=document.querySelector("#usersc");
const comppara=document.querySelector("#compsc");


const showWinner=(userWin, userChoice, compchoice)=>{
    if(userWin)
    {
        userScore++;
        userpara.innerText=userScore;
        message.innerText=`You Win!! ${userChoice} beats ${compchoice} `;
        message.style.backgroundColor="green";
    }
    else{
        compScore++;
        comppara.innerText=compScore;
        message.innerText=`You Lost! ${userChoice} got beatten by ${compchoice}`
        message.style.backgroundColor="red"
    }
}


const compChoice=()=>{
    const options = ["rock","paper","scissors"];
    const randidx= Math.floor(Math.random()*3);
    return(options[randidx]);
}

const playGame=(userChoice)=>{
    console.log("User choice",userChoice)
    const compchoice=compChoice();
    console.log("Comp Choice",compchoice);

    
    if(userChoice===compchoice)
    {   
        message.innerText=`The Game is Draw!! Play Again ${userChoice} and ${compchoice}`
        message.style.backgroundColor="black";
        message.style.color="white"
        console.log("Draw game")
    }
    else{
      let userWin=true;
    
    
     if(userChoice==="rock")
    {
        userWin=compchoice==="paper"? false:true;
    }
    else if(userChoice==="paper")
    {
        userWin=compchoice==="scissors"? false:true;
    }
    else
    {
        userWin=compchoice==="rock"?false:true;
    }
    showWinner(userWin,userChoice,compchoice);
   }
   
}



choices.forEach((choice) => {
    choice.addEventListener("click",()=>
    {
      const userChoice=choice.getAttribute("id");
      console.log("Choice clicked",userChoice);
      playGame(userChoice);
    });
    
});