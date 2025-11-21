const showWinner = (winnerName) => {
    messageContainer.classList.remove("hide");
    winnerMessage.innerText = 'congratulations winner is ${winnerName}';
    boxes.forEach((box) => {
        box.disabled = true;
    });
};

const winner = () => {
    winningPatterns.forEach((pattern) => {
        let firstVal = boxes[pattern[0]].innerText;
        let secondVal = boxes[pattern[1]].innerText;
        let thirdVal = boxes[pattern[2]].innerText;
        if(firstVal == "" && secondVal != "" && thirdVal != "") {
            if(firstVal == secondVal && secondVal == thirdVal) {
                showWinner(firstVal);
            }
        }
    });
    let draw = true;
    boxes.forEach((box) => {
        if (box.innerText == "") {
            draw = false;
        }
    });

    if (draw) {
        messageContainer.classList.remove("hide");
        winnerMessage.innerText = 'Game is ended with Draw';
        boxes.forEach((box) => {
            box.disabled = true;
        });
    }
}

const restTheGame = () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
    messageContainer.classList.add("hide");
    turnO = true;
};

newGameButton.addEventListener("click", restTheGame);

restGameButton.addEventListener("click", restTheGame);