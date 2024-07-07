
let userScore=0;
let compScore=0;

const user=document.querySelector("#user-score");
const comp=document.querySelector("#comp-score");

const choices=document.querySelectorAll(".choice");

const msg=document.querySelector("#msg");

const genCompChoice= () =>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}

const showWinner= (userWin) =>{
    if(userWin)
        {
            msg.innerText="You Win!!";
            msg.style.backgroundColor="green";
            userScore++;
            user.innerText=userScore;
        }
    else
        {
            msg.innerText="You Lose!";
            msg.style.backgroundColor="red";
            compScore++;
            comp.innerText=compScore;
        }    
}

const playGame= (userChoice) =>{
    const compChoice=genCompChoice();
    if(userChoice===compChoice)
        {
            msg.innerText="It's a Draw....";
            msg.style.backgroundColor="#081b31"
        }
    else
        {
            let userWin=true;
            if(userChoice==="rock")
                {
                    //compChoice=paper/scissors
                    userWin = compChoice==="paper"?false:true;
                }
            else if(userChoice==="paper")
                {
                    //compChoice=rock/scissors
                    userWin = compChoice==="scissors"?false:true;
                }    
            else
                {
                    userWin = compChoice==="rock"?false:true;
                } 
            showWinner(userWin);       
        }   
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});
