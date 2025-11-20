const showWinner = (winnerName) => {
    messageContainer.classList.remove("hide");
    winnerMessage.innerText = 'congratulations winner is ${winnerName}';
    boxes.forEach((box) => {
        box.disabled = true;
    });
};

