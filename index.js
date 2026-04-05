let box = document.querySelectorAll(".box");
let reset_btn = document.querySelector(".reset_btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let trunO = true ;
let count = 0;

const winPattren =  [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetGames = () => {
    trunO = true;
    enableBoxes();
    count = 0;
    msgContainer.classList.add("hide");
}

box.forEach((box) => {
    box.addEventListener("click" , () => {
        console.log("Box was cliack");
        if(trunO) {
            box.innerText = "O";
            trunO = false;
        } else {
            box.innerText = "X";
            trunO = true;
        }
        box.disabled = true;

        // checkWinner();

        count++; 

        let isWinner = checkWinner(); 

        if (count === 9 && !isWinner) {
            gameDraw();
        }
    })
});

const showWinner = (winner) => {
    msg.innerText = `Congratulation , Winner is  ${winner} 🏆`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const gameDraw = () => {
    msg.innerText = `Game was a Draw. 🤝`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const disableBoxes = () => {
    for(let b of box) {
        b.disabled = true;
    }
}

const enableBoxes = () => {
    for(let b of box) {
        b.disabled = false;
        b.innerText = "";
    }
}

 const checkWinner = () => {
    for( let pattren of winPattren) {
        let pos1Val = box[pattren[0]].innerText;
        let pos2Val = box[pattren[1]].innerText;
        let pos3Val = box[pattren[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if(pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("Winner", pos1Val);
                showWinner(pos1Val);
                // requestAnimationFrame;
                return true;
            }
        }
    }
return false;
};

newGameBtn.addEventListener("click", resetGames);
reset_btn.addEventListener("click", resetGames);