let user_score = 0;
let comp_score = 0;


const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const scoreOfUser = document.querySelector("#user-score");
const scoreOfComp = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ['rock','paper','scissor'];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

choices.forEach((choice) => {

    choice.addEventListener("click" , () => {

        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });

});


const playGame = (userChoice) => {

    // generate comp choice
    const compChoice = genCompChoice();

    // console.log("user choice is : ",userChoice);
    // console.log("comp choice is : ",compChoice)

    if(userChoice === compChoice)
    {
        drawGame(userChoice);
    }
    else
    {
        let userWIn = true;
        if(userChoice === "rock")
        {
            userWIn = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper")
        {
            userWIn = compChoice === "rock" ? true : false;
        }
        else if(userChoice === "scissor")
        {
            userWIn = compChoice ==="rock" ? false : true;
        }
        showWinner(userWIn,userChoice,compChoice);
    }

}


const drawGame = (userChoice) => {
    msg.textContent = `It's a draw! You both chose ${userChoice}`;
    msg.style.backgroundColor = "orange"
};


const showWinner = (userWIn,userChoice,compChoice) => {
    if(userWIn){
        msg.textContent = `You win! Your ${userChoice} beat ${compChoice}`;
        msg.style.backgroundColor = "Green";
        user_score++;
    }else{
        msg.textContent = `You Lost. ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "Red";
        comp_score++;
    }
    scoreIncrease();
};

const scoreIncrease = () =>{
    scoreOfUser.textContent = user_score;
    scoreOfComp.textContent = comp_score;
}