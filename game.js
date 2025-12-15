
let buttons = document.querySelectorAll(".btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let resetBtn = document.querySelector("#reset");
let turnO=true;
const winPatterns=[
  [0,1,2], // Top row
  [3,4,5], // Middle row
  [6,7,8], // Bottom row
  [0,3,6], // Left column
  [1,4,7], // Middle column
  [2,5,8], // Right column
  [0,4,8], // Main diagonal
  [2,4,6]  // Anti diagon
];

buttons.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        if(turnO==true){
            btn.innerText="O";
            turnO=false;
        }
        else{
            btn.innerText="X"
            turnO=true;
        }
        btn.disabled=true;
        checkWinner();
    });
});

const showWinner=(winner)=>{
    msg.innerText=`Congratulation Winner is ${winner}`;
    msgContainer.classList.remove("hide");
};

const checkWinner=()=>{
    for(let pattern of winPatterns){
        let pos1Val=buttons[pattern[0]].innerText;
        let pos2Val=buttons[pattern[1]].innerText;
        let pos3Val=buttons[pattern[2]].innerText;

        if(pos1Val!="" && pos2Val!="" && pos3Val!=""){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
                console.log("winner",pos1Val);
                showWinner(pos1Val);
            }
        }
    }
}

const resetGame = () => {
    turnO = true;
    msgContainer.classList.add("hide");

    buttons.forEach(btn => {
        btn.innerText = "";
        btn.disabled = false;
    });
};

resetBtn.addEventListener("click", resetGame);
